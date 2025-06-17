# SceneApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createScene**](#createscene) | **PUT** /api/Scene | |
|[**deleteScene**](#deletescene) | **DELETE** /api/Scene | |
|[**getScene**](#getscene) | **GET** /api/Scene/{sceneId} | |
|[**getScenes**](#getscenes) | **GET** /api/Scene | |

# **createScene**
> SceneDTO createScene()


### Example

```typescript
import {
    SceneApi,
    Configuration,
    CreateSceneDTO
} from './api';

const configuration = new Configuration();
const apiInstance = new SceneApi(configuration);

let createSceneDTO: CreateSceneDTO; // (optional)

const { status, data } = await apiInstance.createScene(
    createSceneDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createSceneDTO** | **CreateSceneDTO**|  | |


### Return type

**SceneDTO**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/*+json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Created |  -  |
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteScene**
> SceneDTO deleteScene()


### Example

```typescript
import {
    SceneApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SceneApi(configuration);

let sceneId: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.deleteScene(
    sceneId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **sceneId** | [**string**] |  | (optional) defaults to undefined|


### Return type

**SceneDTO**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getScene**
> SceneDTO getScene()


### Example

```typescript
import {
    SceneApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SceneApi(configuration);

let sceneId: string; // (default to undefined)

const { status, data } = await apiInstance.getScene(
    sceneId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **sceneId** | [**string**] |  | defaults to undefined|


### Return type

**SceneDTO**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getScenes**
> Array<SceneDTO> getScenes()


### Example

```typescript
import {
    SceneApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SceneApi(configuration);

const { status, data } = await apiInstance.getScenes();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<SceneDTO>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

