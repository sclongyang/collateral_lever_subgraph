// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class ActivePosition extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save ActivePosition entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type ActivePosition must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("ActivePosition", id.toString(), this);
    }
  }

  static load(id: string): ActivePosition | null {
    return changetype<ActivePosition | null>(store.get("ActivePosition", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get userAddress(): Bytes {
    let value = this.get("userAddress");
    return value!.toBytes();
  }

  set userAddress(value: Bytes) {
    this.set("userAddress", Value.fromBytes(value));
  }

  get cTokenCollateralAddress(): Bytes {
    let value = this.get("cTokenCollateralAddress");
    return value!.toBytes();
  }

  set cTokenCollateralAddress(value: Bytes) {
    this.set("cTokenCollateralAddress", Value.fromBytes(value));
  }

  get cTokenBorrowingAddress(): Bytes {
    let value = this.get("cTokenBorrowingAddress");
    return value!.toBytes();
  }

  set cTokenBorrowingAddress(value: Bytes) {
    this.set("cTokenBorrowingAddress", Value.fromBytes(value));
  }

  get collateralAmountOfCollateralToken(): BigInt {
    let value = this.get("collateralAmountOfCollateralToken");
    return value!.toBigInt();
  }

  set collateralAmountOfCollateralToken(value: BigInt) {
    this.set("collateralAmountOfCollateralToken", Value.fromBigInt(value));
  }

  get collateralAmountOfCollateralCToken(): BigInt {
    let value = this.get("collateralAmountOfCollateralCToken");
    return value!.toBigInt();
  }

  set collateralAmountOfCollateralCToken(value: BigInt) {
    this.set("collateralAmountOfCollateralCToken", Value.fromBigInt(value));
  }

  get borrowedAmountOfBorrowingToken(): BigInt {
    let value = this.get("borrowedAmountOfBorrowingToken");
    return value!.toBigInt();
  }

  set borrowedAmountOfBorrowingToken(value: BigInt) {
    this.set("borrowedAmountOfBorrowingToken", Value.fromBigInt(value));
  }

  get positionId(): BigInt {
    let value = this.get("positionId");
    return value!.toBigInt();
  }

  set positionId(value: BigInt) {
    this.set("positionId", Value.fromBigInt(value));
  }

  get isShort(): boolean {
    let value = this.get("isShort");
    return value!.toBoolean();
  }

  set isShort(value: boolean) {
    this.set("isShort", Value.fromBoolean(value));
  }

  get isClosed(): boolean {
    let value = this.get("isClosed");
    return value!.toBoolean();
  }

  set isClosed(value: boolean) {
    this.set("isClosed", Value.fromBoolean(value));
  }
}
