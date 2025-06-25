# UserApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createUser**](#createuser) | **PUT** /api/User | |
|[**deleteUser**](#deleteuser) | **DELETE** /api/User | |
|[**getUser**](#getuser) | **GET** /api/User/{userId} | |
|[**getUsers**](#getusers) | **GET** /api/User | |

# **createUser**
> createUser()


### Example

```typescript
import {
    UserApi,
    Configuration,
    CreateUserDTO
} from './api';

const configuration = new Configuration();
const apiInstance = new UserApi(configuration);

let createUserDTO: CreateUserDTO; // (optional)

const { status, data } = await apiInstance.createUser(
    createUserDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createUserDTO** | **CreateUserDTO**|  | |


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

# **deleteUser**
> SceneDTO deleteUser()


### Example

```typescript
import {
    UserApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UserApi(configuration);

let userId: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.deleteUser(
    userId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userId** | [**string**] |  | (optional) defaults to undefined|


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

# **getUser**
> UserDTO getUser()


### Example

```typescript
import {
    UserApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UserApi(configuration);

let userId: string; // (default to undefined)

const { status, data } = await apiInstance.getUser(
    userId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userId** | [**string**] |  | defaults to undefined|


### Return type

**UserDTO**

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

# **getUsers**
> Array<UserDTO> getUsers()


### Example

```typescript
import {
    UserApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UserApi(configuration);

const { status, data } = await apiInstance.getUsers();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<UserDTO>**

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

