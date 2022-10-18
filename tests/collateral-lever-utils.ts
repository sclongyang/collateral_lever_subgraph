import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  AddSupportedCToken,
  ClosePositionSucc,
  OpenPositionSucc,
  OwnershipTransferred
} from "../generated/CollateralLever/CollateralLever"

export function createAddSupportedCTokenEvent(
  cTokenAddress: Address
): AddSupportedCToken {
  let addSupportedCTokenEvent = changetype<AddSupportedCToken>(newMockEvent())

  addSupportedCTokenEvent.parameters = new Array()

  addSupportedCTokenEvent.parameters.push(
    new ethereum.EventParam(
      "cTokenAddress",
      ethereum.Value.fromAddress(cTokenAddress)
    )
  )

  return addSupportedCTokenEvent
}

export function createClosePositionSuccEvent(
  user: Address,
  positionId: BigInt
): ClosePositionSucc {
  let closePositionSuccEvent = changetype<ClosePositionSucc>(newMockEvent())

  closePositionSuccEvent.parameters = new Array()

  closePositionSuccEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  closePositionSuccEvent.parameters.push(
    new ethereum.EventParam(
      "positionId",
      ethereum.Value.fromUnsignedBigInt(positionId)
    )
  )

  return closePositionSuccEvent
}

export function createOpenPositionSuccEvent(
  user: Address,
  positionInfo: ethereum.Tuple
): OpenPositionSucc {
  let openPositionSuccEvent = changetype<OpenPositionSucc>(newMockEvent())

  openPositionSuccEvent.parameters = new Array()

  openPositionSuccEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  openPositionSuccEvent.parameters.push(
    new ethereum.EventParam(
      "positionInfo",
      ethereum.Value.fromTuple(positionInfo)
    )
  )

  return openPositionSuccEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}
