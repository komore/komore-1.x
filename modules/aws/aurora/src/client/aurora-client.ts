import { type AwsClient } from "@komore/aws";

import { type auroraCommand } from "../aurora.command";
import { type auroraError } from "../aurora.error";
import { type auroraEvent } from "../aurora.event";
import { type auroraQuery } from "../aurora.query";

/**
 * Aurora client
 */
export type AuroraClient = AwsClient<typeof auroraCommand, , typeof auroraEvent, typeof auroraQuery, typeof auroraError>;
