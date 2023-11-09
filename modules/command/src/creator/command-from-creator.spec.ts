import { feature } from "@komore/testing";

feature('Command from creator', {
  const commandType = createCommandType(testDomain, { test: commandProperties<{ testProp: string }>() });
  type X =
});
