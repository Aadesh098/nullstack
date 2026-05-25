import {
  SUPPORTED_CHAT_MODELS,
  findSupportedChatModel,
  type ModelPricing,
} from "@nullstack/shared";
import type { LanguageModelUsage } from "ai";

type CalculateCreditsForUsageParams = {
  provider: string;
  model: string;
  usage: LanguageModelUsage;
};

type BillableUsage = {
  credits: number;
};

type TokenCounts = {
  inputTokens: number;
  outputTokens: number;
};

const TOKENS_PER_MILLION = 1_000_000;
const RS_PER_CREDIT = 0.01;

function getTokenCounts(usage: LanguageModelUsage): TokenCounts {
  const inputTokens = usage.inputTokens;
  const outputTokens = usage.outputTokens;

  if (
    inputTokens == null ||
    outputTokens == null ||
    !Number.isFinite(inputTokens) ||
    !Number.isFinite(outputTokens) ||
    !Number.isInteger(inputTokens) ||
    !Number.isInteger(outputTokens) ||
    inputTokens < 0 ||
    outputTokens < 0
  ) {
    throw new Error("Credit conversion requires input and output token counts");
  }

  return {
    inputTokens,
    outputTokens,
  };
}

function getModelPricing(provider: string, model: string): ModelPricing {
  const supportedModel = findSupportedChatModel(model);

  if (!supportedModel || supportedModel.provider !== provider) {
    if (
      !SUPPORTED_CHAT_MODELS.some(
        (supportedModel) => supportedModel.provider === provider,
      )
    ) {
      throw new Error(`Unsupported billing provider: ${provider}`);
    }

    throw new Error(`Unsupported billing model: ${model}`);
  }

  return supportedModel.pricing;
}

function estimateCostRs(
  { inputTokens, outputTokens }: TokenCounts,
  pricing: ModelPricing,
) {
  return (
    (inputTokens * pricing.inputRsPerMillionTokens +
      outputTokens * pricing.outputRsPerMillionTokens) /
    TOKENS_PER_MILLION
  );
}

function convertRsToCredits(estimatedCostRs: number) {
  if (estimatedCostRs <= 0) {
    return 0;
  }
  return Math.max(1, Math.ceil(estimatedCostRs / RS_PER_CREDIT));
}

export function calculateCreditsForUsage({
  provider,
  model,
  usage,
}: CalculateCreditsForUsageParams): BillableUsage {
  const tokenCounts = getTokenCounts(usage);
  const pricing = getModelPricing(provider, model);
  const estimatedCostRs = estimateCostRs(tokenCounts, pricing);
  const credits = convertRsToCredits(estimatedCostRs);

  return {
    credits,
  };
}
