// Mock response 200 SUCCESS (akin to response.status === 200)
const mockSuccessResponse = {
    ok: true,                                       // Indicates the response was successful
    status: 200,                                    // HTTP status code for Not Found
    statusText: 'OK',                               // Corresponding status text
    json: async () => ({ message: 'Success!' }),    // Mocked JSON response
    text: async () => 'Success!',                   // Mocked plain text response
    headers: new Headers({
        'Content-Type': 'application/json'
    })
};

// Mock response 404 NOT_FOUND (akin to response.status === 400)
const mockNotFoundResponse = {
    ok: false,                                              // Indicates the response was NOT successful
    status: 404,                                            // HTTP status code for Not Found
    statusText: 'Not Found',                                // Corresponding status text
    json: async () => ({ error: 'Resource not found' }),    // Mocked JSON response
    text: async () => 'Resource not found',                 // Mocked plain text response
    headers: new Headers({
        'Content-Type': 'application/json'
    })
};