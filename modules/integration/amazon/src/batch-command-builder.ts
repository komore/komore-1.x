
export interface BatchCommandBuilder {
    (
        input: InputType
      ) => Command<
        AwsClientInput,
        InputType,
        AwsClientOutput,
        OutputType,
        SmithyResolvedConfiguration<AwsClientHandlerOptions>
      >
}