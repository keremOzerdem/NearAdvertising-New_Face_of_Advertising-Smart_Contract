
# Advertising DApp

A new generation web3 Advertising application. You can share your advertisings to the people all around the world. And get in touch with them.


# Cloning the project
After cloning the project please run 
```
    yarn
```
in order to install all of the necessary packages for the project to run correctly.

## Building and Deploying the contract
The contract is located in under the ***assembly*** folder, after editing the contract you can run
```
    yarn build:release
```
in order to build the contract and get the ***.wasm*** file , if you want to build and deploy the contract at the same time, you can run 
```
    yarn dev
```
This will create a test account and deploy the contract into it.

after the contract is deployed, it is necessary to run the following command in the terminal in order to be able to run the contract
```
    export CONTRACT=ACCOUNT_ID
```
where the **ACCOUNT_ID** will be returned after the contract deployment

# Functions
## healthCheck
  - Take ***req(string), rep(string)*** as parameters
  - returns a string
  **Example call:**
```
near call $CONTRACT healthCheck '{"req":"$TYPE_ANYTHING", "rep":"$TYPE_ANYTHING"}' --accountId $NEAR_ACCOUNT
```

## publishAdvertising
  - Take a ***text*** as parameter
  - returns Advertising.
  **Example call:**
```
near call $CONTRACT publishAdvertising '{"text":"$TYPE_ANYTHING"}' --accountId $NEAR_ACCOUNT
```

## bringAdvertising
  - Take ***id(u32)*** as parameter
  - return advertising
  **Example call:**
```
near call $CONTRACT bringAdvertising '{"id":$TYPE_ADVERTISING_ID}' --accountId $NEAR_ACCOUNT
```

## readAdvertising 
  - No parameter
  - return advertising array
**Example call:**
```
near call $CONTRACT readAdvertising --accountId $NEAR_ACCOUNT
```

## deleteAdvertising
  - Takes ***id*** as a parameter
  - Can call if you are the creator of this saying.
  - Returns string `${id} is successfully deleted` or if it's not your saying `${id} is not your saying.Can not delete.`.
  **Example call:**
```
near call $CONTRACT deleteAdvertising '{"id": $TYPE_ADVERTISING_ID}' --accountId $NEAR_ACCOUNT
```

## sendGratitude
  -Takes ***advertisingman(accountId)*** as a parameter
  - no return(void function)
  **Example call:**
```
near call $CONTRACT snedGratitude '{"advertisingman": "$NEAR_ACCOUNT"}' --accountId $NEAR_ACCOUNT
```



