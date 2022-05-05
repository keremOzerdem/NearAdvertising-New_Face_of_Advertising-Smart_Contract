#!/usr/bin/env bash

# exit on first error after this point to avoid redeploying with successful build
set -e

[ -z "$CONTRACT" ] && echo "Missing \$CONTRACT environment variable"
[ -z "$MY_ACC" ] && echo "Missing \$MY_ACC environment variable"
[ -z "$DEST_ACC" ] && echo "Missing \$DEST_ACC environment variable"

export AMOUNT=1
echo "Standard donation amount is: 1 NEAR. If you want to change, you can use:"
echo "export AMOUNT=__donation_amount__"

[ -z "$CONTRACT" ] && echo "Please \export your account to the \$CONTRACT variable!"
[ -z "$CONTRACT" ] && echo "export CONTRACT=__new_contract_account_id__"

[ -z "$MY_ACC" ] && echo "Please \export your account to the \$MY_ACC variable!"
[ -z "$MY_ACC" ] && echo "export MY_ACC=__your_account_name__"

[ -z "$DEST_ACC" ] && echo "Please \export advertisingman's account to the \$DEST_ACC variable!"
[ -z "$DEST_ACC" ] && echo "export DEST_ACC=__advertisingman_account_name__"

echo ---------------------------------------------------------
echo "Step 1: Call 'sendGratitude' functions on the contract"
echo ---------------------------------------------------------
echo "After all variables are exported, please use below function. 
echo "near call $CONTRACT sendGratitude '{"'"advertisingman"'" : "'"$DEST_ACC"'"}' --amount $AMOUNT --accountId $MY_ACC"
echo 
echo
exit 0
