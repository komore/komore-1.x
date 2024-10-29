import '@komore/reactive/polyfill';
import '@komore/temporal/polyfill';

import {
  createDiscordApiClient,
  createDiscordConnection,
  createDiscordMessage,
  discordGatewayPayloadWithEventName,
  discordHeartbeatAckOpcode,
  discordReceivePayloadToData,
  discordReceivePayloadWithType,
  getDiscordGateway,
} from '@komore/discord';
import { createHttpClient } from '@komore/http/client';
import { filter, firstValueFrom, lastValueFrom, map, merge, mergeMap, of, tapNext } from '@komore/reactive';

async function main() {
  const httpClient = createHttpClient();
  const apiToken = '';
  const apiTokenType = 'Bot';
  const apiVersion = '10';
  const parallelism = 1;
  const apiClient = createDiscordApiClient({ apiToken, apiTokenType, apiVersion, httpClient });
  console.log('Fetching gateway URL...');
  const gateway$ = getDiscordGateway(apiClient)();
  const gateway = await firstValueFrom(gateway$);
  const endpointUrl = new URL(gateway.url);
  console.log(`Using gateway ${endpointUrl}...`);
  const sendMessage = createDiscordMessage(apiClient);
  const connection$ = createDiscordConnection({
    apiClient,
    endpointUrl,
    identify: {
      intents: 1 | 1024 | 2048, // Create Instant Invite | Read Messages/View Channels | Send Messages
      properties: {
        browser: 'k',
        device: 'botfns',
        os: 'linux',
      },
      token: apiToken,
    },
    parallelism,
  }).pipe(
    mergeMap(({ gatewayEvents$, payloads$, status$ }) =>
      merge([
        gatewayEvents$.pipe(
          filter(discordGatewayPayloadWithEventName('GUILD_CREATE')),
          map(discordReceivePayloadToData),
          tapNext(guild => {
            if (guild.unavailable) {
              console.log(`Server ${guild.id} is not available`);
              return;
            }

            console.log(`Joined server ${guild.name}`);
            console.log('  Channels:');
            for (const channel of guild.channels) {
              console.log(`    - ${channel.name ?? '?'}`);
            }
            console.log('  Roles:');
            for (const role of guild.roles) {
              console.log(`    - ${role.name}`);
            }
            console.log('  Members:');
            for (const member of guild.members) {
              console.log(`    - ${member.nick ?? member.user.global_name ?? member.user.username}`);
            }
          }),
          map(guild => (!guild.unavailable ? guild.channels.find(({ name }) => name === 'testing')?.id : undefined)),
          mergeMap(channelId =>
            channelId !== undefined ? sendMessage({ content: 'Hello world' }, channelId) : of(undefined)
          ),
          tapNext(result => console.log('post message res', result))
        ),
        gatewayEvents$.pipe(
          filter(discordGatewayPayloadWithEventName('USER_UPDATE')),
          map(discordReceivePayloadToData),
          tapNext(userUpdate => console.log('user update', userUpdate))
        ),
        gatewayEvents$.pipe(
          filter(discordGatewayPayloadWithEventName('CHANNEL_UPDATE')),
          map(discordReceivePayloadToData),
          tapNext(channelUpdate => console.log('channel update', channelUpdate))
        ),
        gatewayEvents$.pipe(tapNext(event => console.log(`Gateway Event "${event.t}"`))),
        payloads$.pipe(
          filter(discordReceivePayloadWithType(discordHeartbeatAckOpcode)),
          tapNext(() => console.log('Ping? Pong!'))
        ),
        status$.pipe(tapNext(status => console.log(`Status changed to ${status}`))),
      ])
    )
  );

  await lastValueFrom(connection$);
}

main();
