export type ModelPricing = {
  inputRsPerMillionTokens: number;
  outputRsPerMillionTokens: number;
};

export type SupportedProvider = "anthropic" | "openai";

type SupportedChatModelDefinition = {
  id: string;
  provider: SupportedProvider;
  pricing: ModelPricing;
};

export const SUPPORTED_CHAT_MODELS = [
  {
    id: "claude-sonnet-4-6",
    provider: "anthropic",
    pricing: {
      inputRsPerMillionTokens: 3,
      outputRsPerMillionTokens: 15,
    },
  },
  {
    id: "claude-haiku-4-5",
    provider: "anthropic",
    pricing: {
      inputRsPerMillionTokens: 1,
      outputRsPerMillionTokens: 5,
    },
  },
  {
    id: "claude-opus-4-6",
    provider: "anthropic",
    pricing: {
      inputRsPerMillionTokens: 5,
      outputRsPerMillionTokens: 25,
    },
  },
  {
    id: "gpt-5.4",
    provider: "openai",
    pricing: {
      inputRsPerMillionTokens: 2.5,
      outputRsPerMillionTokens: 15,
    },
  },
  {
    id: "gpt-5.4-mini",
    provider: "openai",
    pricing: {
      inputRsPerMillionTokens: 0.75,
      outputRsPerMillionTokens: 4.5,
    },
  },
  {
    id: "gpt-5.4-nano",
    provider: "openai",
    pricing: {
      inputRsPerMillionTokens: 0.2,
      outputRsPerMillionTokens: 1.25,
    },
  },
] as const satisfies readonly SupportedChatModelDefinition[];

export type SupportedChatModel = (typeof SUPPORTED_CHAT_MODELS)[number];
export type SupportedChatModelId = SupportedChatModel["id"];

export function findSupportedChatModel(modelId: string) {
  return SUPPORTED_CHAT_MODELS.find((model) => model.id === modelId);
}

export const DEFAULT_CHAT_MODEL_ID: SupportedChatModelId = "claude-opus-4-6";
