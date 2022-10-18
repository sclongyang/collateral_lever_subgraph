import { BigInt, Address, log } from "@graphprotocol/graph-ts"
import {
  CollateralLever,
  ClosePositionSucc as ClosePositionSuccEvent,
  OpenPositionSucc as OpenPositionSuccEvent,
} from "../generated/CollateralLever/CollateralLever"
import { ActivePosition } from "../generated/schema"

export function handleClosePositionSucc(event: ClosePositionSuccEvent): void {  
  log.log(log.Level.INFO, `handleClosePositionSucc positionId: ${event.params.positionId}`)
  let activePosition = ActivePosition.load(event.params.positionId.toString())
  if (!activePosition) {
    log.log(log.Level.ERROR, `handleClosePositionSucc not find positionId: ${event.params.positionId.toString()}`)
    return
  }
  activePosition.isClosed = true;
  activePosition.save()
}

export function handleOpenPositionSucc(event: OpenPositionSuccEvent): void {  
  log.log(log.Level.INFO, `handleOpenPositionSucc positionId: ${event.params.positionInfo.positionId}`)
  let activePosition = new ActivePosition(event.params.positionInfo.positionId.toString())
  activePosition.userAddress = event.params.positionInfo.userAddress;
  activePosition.cTokenCollateralAddress = event.params.positionInfo.cTokenCollateralAddress;
  activePosition.cTokenBorrowingAddress = event.params.positionInfo.cTokenBorrowingAddress;
  activePosition.collateralAmountOfCollateralToken = event.params.positionInfo.collateralAmountOfCollateralToken;
  activePosition.collateralAmountOfCollateralCToken = event.params.positionInfo.collateralAmountOfCollateralCToken;
  activePosition.borrowedAmountOfBorrowingToken = event.params.positionInfo.borrowedAmountOfBorrowingToken;
  activePosition.positionId = event.params.positionInfo.positionId;
  activePosition.isShort = event.params.positionInfo.isShort;
  activePosition.isClosed = false;

  activePosition.save()
}