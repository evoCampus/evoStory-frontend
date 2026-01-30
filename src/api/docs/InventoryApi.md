# InventoryApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**apiInventoryClearPost**](#apiinventoryclearpost) | **POST** /api/Inventory/clear | |
|[**apiInventoryCreateItemPost**](#apiinventorycreateitempost) | **POST** /api/Inventory/createItem | |
|[**apiInventoryMyInventoryGet**](#apiinventorymyinventoryget) | **GET** /api/Inventory/my-inventory | |
|[**apiInventoryPickupItemPost**](#apiinventorypickupitempost) | **POST** /api/Inventory/pickupItem | |
|[**apiInventoryStoryStoryIdAllItemsGet**](#apiinventorystorystoryidallitemsget) | **GET** /api/Inventory/story/{storyId}/allItems | |

# **apiInventoryClearPost**
> apiInventoryClearPost()


### Example

```typescript
import {
    InventoryApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new InventoryApi(configuration);

const { status, data } = await apiInstance.apiInventoryClearPost();
```

### Parameters
This endpoint does not have any parameters.


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

# **apiInventoryCreateItemPost**
> ItemDTO apiInventoryCreateItemPost()


### Example

```typescript
import {
    InventoryApi,
    Configuration,
    CreateItemDTO
} from './api';

const configuration = new Configuration();
const apiInstance = new InventoryApi(configuration);

let createItemDTO: CreateItemDTO; // (optional)

const { status, data } = await apiInstance.apiInventoryCreateItemPost(
    createItemDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createItemDTO** | **CreateItemDTO**|  | |


### Return type

**ItemDTO**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/*+json
 - **Accept**: text/plain, application/json, text/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiInventoryMyInventoryGet**
> Array<InventoryItemDTO> apiInventoryMyInventoryGet()


### Example

```typescript
import {
    InventoryApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new InventoryApi(configuration);

const { status, data } = await apiInstance.apiInventoryMyInventoryGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<InventoryItemDTO>**

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

# **apiInventoryPickupItemPost**
> apiInventoryPickupItemPost()


### Example

```typescript
import {
    InventoryApi,
    Configuration,
    AddToInventoryDTO
} from './api';

const configuration = new Configuration();
const apiInstance = new InventoryApi(configuration);

let addToInventoryDTO: AddToInventoryDTO; // (optional)

const { status, data } = await apiInstance.apiInventoryPickupItemPost(
    addToInventoryDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **addToInventoryDTO** | **AddToInventoryDTO**|  | |


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/*+json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiInventoryStoryStoryIdAllItemsGet**
> Array<ItemDTO> apiInventoryStoryStoryIdAllItemsGet()


### Example

```typescript
import {
    InventoryApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new InventoryApi(configuration);

let storyId: string; // (default to undefined)

const { status, data } = await apiInstance.apiInventoryStoryStoryIdAllItemsGet(
    storyId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **storyId** | [**string**] |  | defaults to undefined|


### Return type

**Array<ItemDTO>**

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

