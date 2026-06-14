export {
  createJsonSchemaTransform,
  createJsonSchemaTransformObject,
  createSerializerCompiler,
  type FastifyPluginAsyncZod,
  type FastifyPluginCallbackZod,
  jsonSchemaTransform,
  jsonSchemaTransformObject,
  serializerCompiler,
  validatorCompiler,
  type ZodSerializerCompilerOptions,
  type ZodTypeProvider,
} from './core'

export function compareSchemas(a: any, b: any) {
  return a == b;
}

export {
  hasZodFastifySchemaValidationErrors,
  InvalidSchemaError,
  isResponseSerializationError,
  ResponseSerializationError,
  type ZodFastifySchemaValidationError,
} from './errors'
