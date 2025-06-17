# StoryApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createStory**](#createstory) | **PUT** /api/Story | |
|[**deleteStory**](#deletestory) | **DELETE** /api/Story/{storyId} | |
|[**editStory**](#editstory) | **PUT** /api/Story/{storyId} | |
|[**getStories**](#getstories) | **GET** /api/Story | |
|[**getStory**](#getstory) | **GET** /api/Story/{storyId} | |

# **createStory**
> createStory()


### Example

```typescript
import {
    StoryApi,
    Configuration,
    CreateStoryDTO
} from './api';

const configuration = new Configuration();
const apiInstance = new StoryApi(configuration);

let createStoryDTO: CreateStoryDTO; // (optional)

const { status, data } = await apiInstance.createStory(
    createStoryDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createStoryDTO** | **CreateStoryDTO**|  | |


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

# **deleteStory**
> StoryDTO deleteStory()


### Example

```typescript
import {
    StoryApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new StoryApi(configuration);

let storyId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteStory(
    storyId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **storyId** | [**string**] |  | defaults to undefined|


### Return type

**StoryDTO**

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

# **editStory**
> StoryDTO editStory()


### Example

```typescript
import {
    StoryApi,
    Configuration,
    EditStoryDTO
} from './api';

const configuration = new Configuration();
const apiInstance = new StoryApi(configuration);

let storyId: string; // (default to undefined)
let editStoryDTO: EditStoryDTO; // (optional)

const { status, data } = await apiInstance.editStory(
    storyId,
    editStoryDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **editStoryDTO** | **EditStoryDTO**|  | |
| **storyId** | [**string**] |  | defaults to undefined|


### Return type

**StoryDTO**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/*+json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getStories**
> Array<StoryDTO> getStories()


### Example

```typescript
import {
    StoryApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new StoryApi(configuration);

const { status, data } = await apiInstance.getStories();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<StoryDTO>**

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

# **getStory**
> StoryDTO getStory()


### Example

```typescript
import {
    StoryApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new StoryApi(configuration);

let storyId: string; // (default to undefined)

const { status, data } = await apiInstance.getStory(
    storyId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **storyId** | [**string**] |  | defaults to undefined|


### Return type

**StoryDTO**

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

