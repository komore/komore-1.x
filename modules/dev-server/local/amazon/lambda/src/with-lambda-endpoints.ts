import type { InvocationType, LogType } from '@aws-sdk/client-lambda';
import { HttpMethods, withHttpEndpoint as on } from '@komore/api/http';
import { addLayerVersionPermission } from './commands/add-layer-version-permission';
import { addPermission } from './commands/add-permission';
import { createAlias } from './commands/create-alias';
import { createCodeSigningConfig } from './commands/create-code-signing-config';
import { createEventSourceMapping } from './commands/create-event-source-mapping';
import { createFunction } from './commands/create-function';
import { deleteAlias } from './commands/delete-alias';
import { deleteCodeSigningConfig } from './commands/delete-code-signing-config';
import { deleteEventSourceMapping } from './commands/delete-event-source-mapping';
import { deleteFunction } from './commands/delete-function';
import { deleteFunctionCodeSigningConfig } from './commands/delete-function-code-signing-config';
import { deleteFunctionConcurrency } from './commands/delete-function-concurrency';
import { deleteFunctionEventInvokeConfig } from './commands/delete-function-event-invoke-config';
import { deleteLayerVersion } from './commands/delete-layer-version';
import { deleteProvisionedConcurrencyConfig } from './commands/delete-provisioned-concurrency-config';
import { getAccountSettings } from './commands/get-account-settings';
import { getAlias } from './commands/get-alias';
import { getCodeSigningConfig } from './commands/get-code-signing-config';
import { getEventSourceMapping } from './commands/get-event-source-mapping';
import { getFunctionCodeSigningConfig } from './commands/get-function-code-signing-config';
import { getFunctionConcurrency } from './commands/get-function-concurrency';
import { getFunctionConfiguration } from './commands/get-function-configuration';
import { getFunctionEventInvokeConfig } from './commands/get-function-event-invoke-config';
import { getLayerVersion } from './commands/get-layer-version';
import { getLayerVersionByArn } from './commands/get-layer-version-by-arn';
import { getLayerVersionPolicy } from './commands/get-layer-version-policy';
import { getPolicy } from './commands/get-policy';
import { getProvisionedConcurrencyConfig } from './commands/get-provisioned-concurrency-config';
import { invoke } from './commands/invoke';
import { listAliases } from './commands/list-aliases';
import { listCodeSigningConfigs } from './commands/list-code-signing-configs';
import { listEventSourceMappings } from './commands/list-event-source-mappings';
import { listFunctionEventInvokeConfigs } from './commands/list-function-event-invoke-configs';
import { listFunctions } from './commands/list-functions';
import { listFunctionsByCodeSigningConfig } from './commands/list-functions-by-code-signing-config';
import { listLayers } from './commands/list-layers';
import { listTags } from './commands/list-tags';
import { listVersionsByFunction } from './commands/list-versions-by-function';
import { publishLayerVersion } from './commands/publish-layer-version';
import { publishVersion } from './commands/publish-version';
import { putFunctionCodeSigningConfig } from './commands/put-function-code-signing-config';
import { putFunctionConcurrency } from './commands/put-function-concurrency';
import { putFunctionEventInvokeConfig } from './commands/put-function-event-invoke-config';
import { putProvisionedConcurrencyConfig } from './commands/put-provisioned-concurrency-config';
import { removeLayerVersionPermission } from './commands/remove-layer-version-permission';
import { removePermission } from './commands/remove-permission';
import { tagResource } from './commands/tag-resource';
import { untagResource } from './commands/untag-resource';
import { updateAlias } from './commands/update-alias';
import { updateCodeSigningConfig } from './commands/update-code-signing-config';
import { updateEventSourceMapping } from './commands/update-event-source-mapping';
import { updateFunctionCode } from './commands/update-function-code';
import { updateFunctionConfiguration } from './commands/update-function-configuration';
import { updateFunctionEventInvokeConfig } from './commands/update-function-event-invoke-config';

const { DELETE, GET, POST, PUT } = HttpMethods;

/**
 * Adds Lambda endpoints to a pipeline
 */
export const withLambdaEndpoints = on('/lambda',
  on('2015-03-31/event-source-mappings',
    on(GET, '?EventSourceArn=:EventSourceArn&FunctionName=:FunctionName&Marker=:Marker&MaxItems=:MaxItems', listEventSourceMappings),
    on(POST, createEventSourceMapping),
    on(':UUID',
      on(DELETE, deleteEventSourceMapping),
      on(GET, getEventSourceMapping),
      on(PUT, updateEventSourceMapping)
    )
  ),
  on('2015-03-31/functions',
    on(GET, '?FunctionVersion=:FunctionVersion&Marker=:Marker&MasterRegion=:MasterRegion&MaxItems=:MaxItems', listFunctions),
    on(POST, createFunction),
    on(':FunctionName',
      on(DELETE, '?Qualifier=:Qualifier', deleteFunction),
      on('aliases',
        on(GET, '?FunctionVersion=:FunctionVersion&Marker=:Marker&MaxItems=:MaxItems', listAliases),
        on(POST, createAlias),
        on(':Name',
          on(DELETE, deleteAlias),
          on(GET, getAlias),
          on(PUT, updateAlias)
        )
      ),
      on('code',
        on(PUT, updateFunctionCode)
      ),
      on('configuration',
        on(GET, getFunctionConfiguration),
        on(PUT, updateFunctionConfiguration)
      ),
      on('invocations',
        on(
          POST,
          '?Qualifier=:Qualifier',
          withHttpHeaders<{
            InvocationType: InvocationType,
            LogType: LogType,
            ClientContext: string
          }>({
            InvocationType: 'X-Amz-InvocationType',
            LogType: 'X-Amz-Log-Type',
            ClientContext: 'X-Amz-Client-Context'
          }),
          withHttpPayload<Uint8Array>('Payload'),
          invoke
        )
      ),
      on('policy',
        on(GET, '?Qualifier=:Qualifier', getPolicy),
        on(POST, '?Qualifier=:Qualifier', addPermission),
        on(':StatementId',
          on(DELETE, '?Qualifier=:Qualifier&RevisionId=:RevisionId', removePermission)
        )
      ),
      on('versions',
        on(GET, '?Marker=:Marker&MaxItems=:MaxItems', listVersionsByFunction),
        on(POST, publishVersion)
      )
    )
  ),
  on('2016-08-19/account-settings',
    on(GET, getAccountSettings)
  ),
  on('2017-03-31/tags',
    on(':ARN',
      on(DELETE, '?TagKeys=:TagsKeys', untagResource),
      on(GET, listTags),
      on(POST, tagResource)
    )
  ),
  on('2017-10-31/functions/:functionName/concurrency',
    on(DELETE, deleteFunctionConcurrency),
    on(GET, getFunctionConcurrency),
    on(PUT, putFunctionConcurrency)
  ),
  on('2018-10-31/layers',
    on(GET, '?find=LayerVersion&Arn=:Arn', getLayerVersionByArn),
    on(GET, '?CompatibleRuntime=:CompatibleRuntime&Marker=:Marker&MaxItems=:MaxItems', listLayers),
    on(':LayerName',
      on('versions',
        on(POST, publishLayerVersion),
        on(':VersionNumber',
          on(DELETE, deleteLayerVersion),
          on(GET, getLayerVersion),
          on('policy',
            on(GET, getLayerVersionPolicy),
            on(POST, '?RevisionId=:RevisionId', addLayerVersionPermission),
            on('StatementId',
              on(DELETE, '?RevisionId=:RevisionId', removeLayerVersionPermission)
            )
          )
        )
      )
    )
  ),
  on('2019-09-25/functions/:functionName/event-invoke-config',
    on('?Qualifier=:Qualifier',
      on(DELETE, deleteFunctionEventInvokeConfig),
      on(GET, getFunctionEventInvokeConfig),
      on(POST, updateFunctionEventInvokeConfig),
      on(PUT, putFunctionEventInvokeConfig)
    ),
    on('list',
      on(GET, '?Marker=:Marker&MaxItems=:MaxItems', listFunctionEventInvokeConfigs)
    )
  ),
  on('2019-09-30/functions/:functionName/provisioned-concurrency?Qualifier=:Qualifier',
    on(DELETE, deleteProvisionedConcurrencyConfig),
    on(GET, getProvisionedConcurrencyConfig),
    on(PUT, putProvisionedConcurrencyConfig)
  ),
  on('2020-04-22/code-signing-configs',
    on(GET, '?Marker=:Marker&MaxItems=:MaxItems', listCodeSigningConfigs),
    on(POST, createCodeSigningConfig),
    on(':CodeSigningConfigArn',
      on(DELETE, deleteCodeSigningConfig),
      on(GET, getCodeSigningConfig),
      on(PUT, updateCodeSigningConfig),
      on('functions',
        on(GET, '?Marker=:Marker&MaxItems=:MaxItems', listFunctionsByCodeSigningConfig)
      )
    )
  ),
  on('2020-06-30/functions/:functionName/code-signing-config',
    on(DELETE, deleteFunctionCodeSigningConfig),
    on(GET, getFunctionCodeSigningConfig),
    on(PUT, putFunctionCodeSigningConfig)
  )
);
