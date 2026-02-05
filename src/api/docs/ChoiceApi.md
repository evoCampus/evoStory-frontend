# ChoiceApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**apiChoiceSceneSceneIdAvailableGet**](#apichoicescenesceneidavailableget) | **GET** /api/Choice/scene/{sceneId}/available | |
|[**apiChoiceSelectPost**](#apichoiceselectpost) | **POST** /api/Choice/select | |
|[**createChoice**](#createchoice) | **PUT** /api/Choice | |
|[**deleteChoice**](#deletechoice) | **DELETE** /api/Choice/{choiceId} | |
|[**getChoice**](#getchoice) | **GET** /api/Choice/{choiceId} | |
|[**getChoices**](#getchoices) | **GET** /api/Choice | |

# **apiChoiceSceneSceneIdAvailableGet**
> Array<ChoiceDTO> apiChoiceSceneSceneIdAvailableGet()


### Example

```typescript
import {
    ChoiceApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ChoiceApi(configuration);

let sceneId: string; // (default to undefined)

const { status, data } = await apiInstance.apiChoiceSceneSceneIdAvailableGet(
    sceneId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **sceneId** | [**string**] |  | defaults to undefined|


### Return type

**Array<ChoiceDTO>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiChoiceSelectPost**
> apiChoiceSelectPost()


### Example

```typescript
import {
    ChoiceApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ChoiceApi(configuration);

let choiceId: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.apiChoiceSelectPost(
    choiceId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **choiceId** | [**string**] |  | (optional) defaults to undefined|


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createChoice**
> createChoice()


### Example

```typescript
import {
    ChoiceApi,
    Configuration,
    CreateChoiceDTO
} from './api';

const configuration = new Configuration();
const apiInstance = new ChoiceApi(configuration);

let createChoiceDTO: CreateChoiceDTO; // (optional)

const { status, data } = await apiInstance.createChoice(
    createChoiceDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createChoiceDTO** | **CreateChoiceDTO**|  | |


### Return type

void (empty response body)

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

# **deleteChoice**
> ChoiceDTO deleteChoice()


### Example

```typescript
import {
    ChoiceApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ChoiceApi(configuration);

let choiceId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteChoice(
    choiceId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **choiceId** | [**string**] |  | defaults to undefined|


### Return type

**ChoiceDTO**

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

# **getChoice**
> ChoiceDTO getChoice()


### Example

```typescript
import {
    ChoiceApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ChoiceApi(configuration);

let choiceId: string; // (default to undefined)

const { status, data } = await apiInstance.getChoice(
    choiceId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **choiceId** | [**string**] |  | defaults to undefined|


### Return type

**ChoiceDTO**

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

# **getChoices**
> Array<ChoiceDTO> getChoices()


### Example

```typescript
import {
    ChoiceApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ChoiceApi(configuration);

const { status, data } = await apiInstance.getChoices();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<ChoiceDTO>**

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

