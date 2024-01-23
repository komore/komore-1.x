import { type DiscordUser } from '../../user/discord-user';

/**
 * Discord ready event data
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#ready Ready}
 */
export interface DiscordReadyEventData {
  /**
   * API version
   */
  readonly v: number;
  /**
   * User
   */
  readonly user: DiscordUser;
}

/**
 * Discord ready event name
 */
export const discordReadyEventName = 'READY';

const x = {
  v: 6,
  user_settings: {},
  user: {
    verified: true,
    username: 'botfns',
    mfa_enabled: true,
    id: '1147052913554894942',
    global_name: null,
    flags: 0,
    email: null,
    discriminator: '4406',
    bot: true,
    avatar: null,
  },
  session_type: 'normal',
  session_id: '4ca63486cad97076bea6c950a41e324f',
  resume_gateway_url: 'wss://gateway-us-east1-c.discord.gg',
  relationships: [],
  private_channels: [],
  presences: [],
  guilds: [{ unavailable: true, id: '1146796367436595300' }],
  guild_join_requests: [],
  geo_ordered_rtc_regions: ['rotterdam', 'frankfurt', 'milan', 'madrid', 'stockholm'],
  current_location: ['FR', 'FR:IDF', 'FR:75'],
  auth: {},
  application: { id: '1147052913554894942', flags: 0 },
  _trace: [
    '["gateway-prd-us-east1-c-g84d",{"micros":114959,"calls":["id_created",{"micros":2278,"calls":[]},"session_lookup_time",{"micros":2700,"calls":[]},"session_lookup_finished",{"micros":16,"calls":[]},"discord-sessions-prd-2-89",{"micros":108555,"calls":["start_session",{"micros":80565,"calls":["discord-api-56589b7784-hms6t",{"micros":74180,"calls":["get_user",{"micros":17829},"get_guilds",{"micros":6085},"send_scheduled_deletion_message",{"micros":11},"guild_join_requests",{"micros":3835},"authorized_ip_coro",{"micros":13}]}]},"starting_guild_connect",{"micros":72,"calls":[]},"presence_started",{"micros":330,"calls":[]},"guilds_started",{"micros":101,"calls":[]},"guilds_connect",{"micros":2,"calls":[]},"presence_connect",{"micros":27425,"calls":[]},"connect_finished",{"micros":27432,"calls":[]},"build_ready",{"micros":21,"calls":[]},"clean_ready",{"micros":1,"calls":[]},"optimize_ready",{"micros":0,"calls":[]},"split_ready",{"micros":31,"calls":[]}]}]}]',
  ],
};
