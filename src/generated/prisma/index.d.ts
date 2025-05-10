
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model Bank
 * 
 */
export type Bank = $Result.DefaultSelection<Prisma.$BankPayload>
/**
 * Model UserBank
 * 
 */
export type UserBank = $Result.DefaultSelection<Prisma.$UserBankPayload>
/**
 * Model InvestmentAccount
 * 
 */
export type InvestmentAccount = $Result.DefaultSelection<Prisma.$InvestmentAccountPayload>
/**
 * Model SavingsAccount
 * 
 */
export type SavingsAccount = $Result.DefaultSelection<Prisma.$SavingsAccountPayload>
/**
 * Model CheckingsAccount
 * 
 */
export type CheckingsAccount = $Result.DefaultSelection<Prisma.$CheckingsAccountPayload>
/**
 * Model Transaction
 * 
 */
export type Transaction = $Result.DefaultSelection<Prisma.$TransactionPayload>
/**
 * Model Payables
 * 
 */
export type Payables = $Result.DefaultSelection<Prisma.$PayablesPayload>
/**
 * Model SupportMessages
 * 
 */
export type SupportMessages = $Result.DefaultSelection<Prisma.$SupportMessagesPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bank`: Exposes CRUD operations for the **Bank** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Banks
    * const banks = await prisma.bank.findMany()
    * ```
    */
  get bank(): Prisma.BankDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userBank`: Exposes CRUD operations for the **UserBank** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserBanks
    * const userBanks = await prisma.userBank.findMany()
    * ```
    */
  get userBank(): Prisma.UserBankDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.investmentAccount`: Exposes CRUD operations for the **InvestmentAccount** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InvestmentAccounts
    * const investmentAccounts = await prisma.investmentAccount.findMany()
    * ```
    */
  get investmentAccount(): Prisma.InvestmentAccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.savingsAccount`: Exposes CRUD operations for the **SavingsAccount** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SavingsAccounts
    * const savingsAccounts = await prisma.savingsAccount.findMany()
    * ```
    */
  get savingsAccount(): Prisma.SavingsAccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.checkingsAccount`: Exposes CRUD operations for the **CheckingsAccount** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CheckingsAccounts
    * const checkingsAccounts = await prisma.checkingsAccount.findMany()
    * ```
    */
  get checkingsAccount(): Prisma.CheckingsAccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transaction`: Exposes CRUD operations for the **Transaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transactions
    * const transactions = await prisma.transaction.findMany()
    * ```
    */
  get transaction(): Prisma.TransactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payables`: Exposes CRUD operations for the **Payables** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payables
    * const payables = await prisma.payables.findMany()
    * ```
    */
  get payables(): Prisma.PayablesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.supportMessages`: Exposes CRUD operations for the **SupportMessages** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SupportMessages
    * const supportMessages = await prisma.supportMessages.findMany()
    * ```
    */
  get supportMessages(): Prisma.SupportMessagesDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Session: 'Session',
    Bank: 'Bank',
    UserBank: 'UserBank',
    InvestmentAccount: 'InvestmentAccount',
    SavingsAccount: 'SavingsAccount',
    CheckingsAccount: 'CheckingsAccount',
    Transaction: 'Transaction',
    Payables: 'Payables',
    SupportMessages: 'SupportMessages'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "session" | "bank" | "userBank" | "investmentAccount" | "savingsAccount" | "checkingsAccount" | "transaction" | "payables" | "supportMessages"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      Bank: {
        payload: Prisma.$BankPayload<ExtArgs>
        fields: Prisma.BankFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BankFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BankFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankPayload>
          }
          findFirst: {
            args: Prisma.BankFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BankFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankPayload>
          }
          findMany: {
            args: Prisma.BankFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankPayload>[]
          }
          create: {
            args: Prisma.BankCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankPayload>
          }
          createMany: {
            args: Prisma.BankCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BankCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankPayload>[]
          }
          delete: {
            args: Prisma.BankDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankPayload>
          }
          update: {
            args: Prisma.BankUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankPayload>
          }
          deleteMany: {
            args: Prisma.BankDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BankUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BankUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankPayload>[]
          }
          upsert: {
            args: Prisma.BankUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankPayload>
          }
          aggregate: {
            args: Prisma.BankAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBank>
          }
          groupBy: {
            args: Prisma.BankGroupByArgs<ExtArgs>
            result: $Utils.Optional<BankGroupByOutputType>[]
          }
          count: {
            args: Prisma.BankCountArgs<ExtArgs>
            result: $Utils.Optional<BankCountAggregateOutputType> | number
          }
        }
      }
      UserBank: {
        payload: Prisma.$UserBankPayload<ExtArgs>
        fields: Prisma.UserBankFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserBankFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBankPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserBankFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBankPayload>
          }
          findFirst: {
            args: Prisma.UserBankFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBankPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserBankFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBankPayload>
          }
          findMany: {
            args: Prisma.UserBankFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBankPayload>[]
          }
          create: {
            args: Prisma.UserBankCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBankPayload>
          }
          createMany: {
            args: Prisma.UserBankCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserBankCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBankPayload>[]
          }
          delete: {
            args: Prisma.UserBankDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBankPayload>
          }
          update: {
            args: Prisma.UserBankUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBankPayload>
          }
          deleteMany: {
            args: Prisma.UserBankDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserBankUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserBankUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBankPayload>[]
          }
          upsert: {
            args: Prisma.UserBankUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBankPayload>
          }
          aggregate: {
            args: Prisma.UserBankAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserBank>
          }
          groupBy: {
            args: Prisma.UserBankGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserBankGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserBankCountArgs<ExtArgs>
            result: $Utils.Optional<UserBankCountAggregateOutputType> | number
          }
        }
      }
      InvestmentAccount: {
        payload: Prisma.$InvestmentAccountPayload<ExtArgs>
        fields: Prisma.InvestmentAccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InvestmentAccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentAccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InvestmentAccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentAccountPayload>
          }
          findFirst: {
            args: Prisma.InvestmentAccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentAccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InvestmentAccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentAccountPayload>
          }
          findMany: {
            args: Prisma.InvestmentAccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentAccountPayload>[]
          }
          create: {
            args: Prisma.InvestmentAccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentAccountPayload>
          }
          createMany: {
            args: Prisma.InvestmentAccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InvestmentAccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentAccountPayload>[]
          }
          delete: {
            args: Prisma.InvestmentAccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentAccountPayload>
          }
          update: {
            args: Prisma.InvestmentAccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentAccountPayload>
          }
          deleteMany: {
            args: Prisma.InvestmentAccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InvestmentAccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InvestmentAccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentAccountPayload>[]
          }
          upsert: {
            args: Prisma.InvestmentAccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentAccountPayload>
          }
          aggregate: {
            args: Prisma.InvestmentAccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInvestmentAccount>
          }
          groupBy: {
            args: Prisma.InvestmentAccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<InvestmentAccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.InvestmentAccountCountArgs<ExtArgs>
            result: $Utils.Optional<InvestmentAccountCountAggregateOutputType> | number
          }
        }
      }
      SavingsAccount: {
        payload: Prisma.$SavingsAccountPayload<ExtArgs>
        fields: Prisma.SavingsAccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SavingsAccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavingsAccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SavingsAccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavingsAccountPayload>
          }
          findFirst: {
            args: Prisma.SavingsAccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavingsAccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SavingsAccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavingsAccountPayload>
          }
          findMany: {
            args: Prisma.SavingsAccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavingsAccountPayload>[]
          }
          create: {
            args: Prisma.SavingsAccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavingsAccountPayload>
          }
          createMany: {
            args: Prisma.SavingsAccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SavingsAccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavingsAccountPayload>[]
          }
          delete: {
            args: Prisma.SavingsAccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavingsAccountPayload>
          }
          update: {
            args: Prisma.SavingsAccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavingsAccountPayload>
          }
          deleteMany: {
            args: Prisma.SavingsAccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SavingsAccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SavingsAccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavingsAccountPayload>[]
          }
          upsert: {
            args: Prisma.SavingsAccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavingsAccountPayload>
          }
          aggregate: {
            args: Prisma.SavingsAccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSavingsAccount>
          }
          groupBy: {
            args: Prisma.SavingsAccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<SavingsAccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.SavingsAccountCountArgs<ExtArgs>
            result: $Utils.Optional<SavingsAccountCountAggregateOutputType> | number
          }
        }
      }
      CheckingsAccount: {
        payload: Prisma.$CheckingsAccountPayload<ExtArgs>
        fields: Prisma.CheckingsAccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CheckingsAccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckingsAccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CheckingsAccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckingsAccountPayload>
          }
          findFirst: {
            args: Prisma.CheckingsAccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckingsAccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CheckingsAccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckingsAccountPayload>
          }
          findMany: {
            args: Prisma.CheckingsAccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckingsAccountPayload>[]
          }
          create: {
            args: Prisma.CheckingsAccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckingsAccountPayload>
          }
          createMany: {
            args: Prisma.CheckingsAccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CheckingsAccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckingsAccountPayload>[]
          }
          delete: {
            args: Prisma.CheckingsAccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckingsAccountPayload>
          }
          update: {
            args: Prisma.CheckingsAccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckingsAccountPayload>
          }
          deleteMany: {
            args: Prisma.CheckingsAccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CheckingsAccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CheckingsAccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckingsAccountPayload>[]
          }
          upsert: {
            args: Prisma.CheckingsAccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckingsAccountPayload>
          }
          aggregate: {
            args: Prisma.CheckingsAccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCheckingsAccount>
          }
          groupBy: {
            args: Prisma.CheckingsAccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<CheckingsAccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.CheckingsAccountCountArgs<ExtArgs>
            result: $Utils.Optional<CheckingsAccountCountAggregateOutputType> | number
          }
        }
      }
      Transaction: {
        payload: Prisma.$TransactionPayload<ExtArgs>
        fields: Prisma.TransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findFirst: {
            args: Prisma.TransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findMany: {
            args: Prisma.TransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          create: {
            args: Prisma.TransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          createMany: {
            args: Prisma.TransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TransactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          delete: {
            args: Prisma.TransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          update: {
            args: Prisma.TransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          deleteMany: {
            args: Prisma.TransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TransactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          upsert: {
            args: Prisma.TransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          aggregate: {
            args: Prisma.TransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransaction>
          }
          groupBy: {
            args: Prisma.TransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransactionCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionCountAggregateOutputType> | number
          }
        }
      }
      Payables: {
        payload: Prisma.$PayablesPayload<ExtArgs>
        fields: Prisma.PayablesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PayablesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayablesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PayablesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayablesPayload>
          }
          findFirst: {
            args: Prisma.PayablesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayablesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PayablesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayablesPayload>
          }
          findMany: {
            args: Prisma.PayablesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayablesPayload>[]
          }
          create: {
            args: Prisma.PayablesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayablesPayload>
          }
          createMany: {
            args: Prisma.PayablesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PayablesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayablesPayload>[]
          }
          delete: {
            args: Prisma.PayablesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayablesPayload>
          }
          update: {
            args: Prisma.PayablesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayablesPayload>
          }
          deleteMany: {
            args: Prisma.PayablesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PayablesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PayablesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayablesPayload>[]
          }
          upsert: {
            args: Prisma.PayablesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayablesPayload>
          }
          aggregate: {
            args: Prisma.PayablesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayables>
          }
          groupBy: {
            args: Prisma.PayablesGroupByArgs<ExtArgs>
            result: $Utils.Optional<PayablesGroupByOutputType>[]
          }
          count: {
            args: Prisma.PayablesCountArgs<ExtArgs>
            result: $Utils.Optional<PayablesCountAggregateOutputType> | number
          }
        }
      }
      SupportMessages: {
        payload: Prisma.$SupportMessagesPayload<ExtArgs>
        fields: Prisma.SupportMessagesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SupportMessagesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportMessagesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SupportMessagesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportMessagesPayload>
          }
          findFirst: {
            args: Prisma.SupportMessagesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportMessagesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SupportMessagesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportMessagesPayload>
          }
          findMany: {
            args: Prisma.SupportMessagesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportMessagesPayload>[]
          }
          create: {
            args: Prisma.SupportMessagesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportMessagesPayload>
          }
          createMany: {
            args: Prisma.SupportMessagesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SupportMessagesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportMessagesPayload>[]
          }
          delete: {
            args: Prisma.SupportMessagesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportMessagesPayload>
          }
          update: {
            args: Prisma.SupportMessagesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportMessagesPayload>
          }
          deleteMany: {
            args: Prisma.SupportMessagesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SupportMessagesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SupportMessagesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportMessagesPayload>[]
          }
          upsert: {
            args: Prisma.SupportMessagesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportMessagesPayload>
          }
          aggregate: {
            args: Prisma.SupportMessagesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSupportMessages>
          }
          groupBy: {
            args: Prisma.SupportMessagesGroupByArgs<ExtArgs>
            result: $Utils.Optional<SupportMessagesGroupByOutputType>[]
          }
          count: {
            args: Prisma.SupportMessagesCountArgs<ExtArgs>
            result: $Utils.Optional<SupportMessagesCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    session?: SessionOmit
    bank?: BankOmit
    userBank?: UserBankOmit
    investmentAccount?: InvestmentAccountOmit
    savingsAccount?: SavingsAccountOmit
    checkingsAccount?: CheckingsAccountOmit
    transaction?: TransactionOmit
    payables?: PayablesOmit
    supportMessages?: SupportMessagesOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    userBanks: number
    Payables: number
    SupportMessages: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userBanks?: boolean | UserCountOutputTypeCountUserBanksArgs
    Payables?: boolean | UserCountOutputTypeCountPayablesArgs
    SupportMessages?: boolean | UserCountOutputTypeCountSupportMessagesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserBanksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserBankWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPayablesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PayablesWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSupportMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SupportMessagesWhereInput
  }


  /**
   * Count Type BankCountOutputType
   */

  export type BankCountOutputType = {
    userBanks: number
  }

  export type BankCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userBanks?: boolean | BankCountOutputTypeCountUserBanksArgs
  }

  // Custom InputTypes
  /**
   * BankCountOutputType without action
   */
  export type BankCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankCountOutputType
     */
    select?: BankCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BankCountOutputType without action
   */
  export type BankCountOutputTypeCountUserBanksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserBankWhereInput
  }


  /**
   * Count Type CheckingsAccountCountOutputType
   */

  export type CheckingsAccountCountOutputType = {
    transactions: number
  }

  export type CheckingsAccountCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | CheckingsAccountCountOutputTypeCountTransactionsArgs
  }

  // Custom InputTypes
  /**
   * CheckingsAccountCountOutputType without action
   */
  export type CheckingsAccountCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckingsAccountCountOutputType
     */
    select?: CheckingsAccountCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CheckingsAccountCountOutputType without action
   */
  export type CheckingsAccountCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    cnic: string | null
    phone: string | null
    password: string | null
    role: $Enums.Role | null
    otp: string | null
    resetToken: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    cnic: string | null
    phone: string | null
    password: string | null
    role: $Enums.Role | null
    otp: string | null
    resetToken: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    cnic: number
    phone: number
    password: number
    role: number
    otp: number
    resetToken: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    cnic?: true
    phone?: true
    password?: true
    role?: true
    otp?: true
    resetToken?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    cnic?: true
    phone?: true
    password?: true
    role?: true
    otp?: true
    resetToken?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    cnic?: true
    phone?: true
    password?: true
    role?: true
    otp?: true
    resetToken?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    cnic: string
    phone: string
    password: string
    role: $Enums.Role
    otp: string | null
    resetToken: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    cnic?: boolean
    phone?: boolean
    password?: boolean
    role?: boolean
    otp?: boolean
    resetToken?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userBanks?: boolean | User$userBanksArgs<ExtArgs>
    Payables?: boolean | User$PayablesArgs<ExtArgs>
    SupportMessages?: boolean | User$SupportMessagesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    cnic?: boolean
    phone?: boolean
    password?: boolean
    role?: boolean
    otp?: boolean
    resetToken?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    cnic?: boolean
    phone?: boolean
    password?: boolean
    role?: boolean
    otp?: boolean
    resetToken?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    cnic?: boolean
    phone?: boolean
    password?: boolean
    role?: boolean
    otp?: boolean
    resetToken?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "cnic" | "phone" | "password" | "role" | "otp" | "resetToken" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userBanks?: boolean | User$userBanksArgs<ExtArgs>
    Payables?: boolean | User$PayablesArgs<ExtArgs>
    SupportMessages?: boolean | User$SupportMessagesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      userBanks: Prisma.$UserBankPayload<ExtArgs>[]
      Payables: Prisma.$PayablesPayload<ExtArgs>[]
      SupportMessages: Prisma.$SupportMessagesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      cnic: string
      phone: string
      password: string
      role: $Enums.Role
      otp: string | null
      resetToken: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userBanks<T extends User$userBanksArgs<ExtArgs> = {}>(args?: Subset<T, User$userBanksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserBankPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Payables<T extends User$PayablesArgs<ExtArgs> = {}>(args?: Subset<T, User$PayablesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayablesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    SupportMessages<T extends User$SupportMessagesArgs<ExtArgs> = {}>(args?: Subset<T, User$SupportMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupportMessagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly cnic: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly otp: FieldRef<"User", 'String'>
    readonly resetToken: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.userBanks
   */
  export type User$userBanksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBank
     */
    select?: UserBankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBank
     */
    omit?: UserBankOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBankInclude<ExtArgs> | null
    where?: UserBankWhereInput
    orderBy?: UserBankOrderByWithRelationInput | UserBankOrderByWithRelationInput[]
    cursor?: UserBankWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserBankScalarFieldEnum | UserBankScalarFieldEnum[]
  }

  /**
   * User.Payables
   */
  export type User$PayablesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payables
     */
    select?: PayablesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payables
     */
    omit?: PayablesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayablesInclude<ExtArgs> | null
    where?: PayablesWhereInput
    orderBy?: PayablesOrderByWithRelationInput | PayablesOrderByWithRelationInput[]
    cursor?: PayablesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PayablesScalarFieldEnum | PayablesScalarFieldEnum[]
  }

  /**
   * User.SupportMessages
   */
  export type User$SupportMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportMessages
     */
    select?: SupportMessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupportMessages
     */
    omit?: SupportMessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportMessagesInclude<ExtArgs> | null
    where?: SupportMessagesWhereInput
    orderBy?: SupportMessagesOrderByWithRelationInput | SupportMessagesOrderByWithRelationInput[]
    cursor?: SupportMessagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SupportMessagesScalarFieldEnum | SupportMessagesScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    sid: string | null
    data: string | null
    expiresAt: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    sid: string | null
    data: string | null
    expiresAt: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    sid: number
    data: number
    expiresAt: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    sid?: true
    data?: true
    expiresAt?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    sid?: true
    data?: true
    expiresAt?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    sid?: true
    data?: true
    expiresAt?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    sid: string
    data: string
    expiresAt: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sid?: boolean
    data?: boolean
    expiresAt?: boolean
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sid?: boolean
    data?: boolean
    expiresAt?: boolean
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sid?: boolean
    data?: boolean
    expiresAt?: boolean
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    sid?: boolean
    data?: boolean
    expiresAt?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sid" | "data" | "expiresAt", ExtArgs["result"]["session"]>

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sid: string
      data: string
      expiresAt: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly sid: FieldRef<"Session", 'String'>
    readonly data: FieldRef<"Session", 'String'>
    readonly expiresAt: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
  }


  /**
   * Model Bank
   */

  export type AggregateBank = {
    _count: BankCountAggregateOutputType | null
    _avg: BankAvgAggregateOutputType | null
    _sum: BankSumAggregateOutputType | null
    _min: BankMinAggregateOutputType | null
    _max: BankMaxAggregateOutputType | null
  }

  export type BankAvgAggregateOutputType = {
    id: number | null
  }

  export type BankSumAggregateOutputType = {
    id: number | null
  }

  export type BankMinAggregateOutputType = {
    id: number | null
    name: string | null
    logo: string | null
    shortDescription: string | null
    email: string | null
    phone: string | null
  }

  export type BankMaxAggregateOutputType = {
    id: number | null
    name: string | null
    logo: string | null
    shortDescription: string | null
    email: string | null
    phone: string | null
  }

  export type BankCountAggregateOutputType = {
    id: number
    name: number
    logo: number
    shortDescription: number
    email: number
    phone: number
    _all: number
  }


  export type BankAvgAggregateInputType = {
    id?: true
  }

  export type BankSumAggregateInputType = {
    id?: true
  }

  export type BankMinAggregateInputType = {
    id?: true
    name?: true
    logo?: true
    shortDescription?: true
    email?: true
    phone?: true
  }

  export type BankMaxAggregateInputType = {
    id?: true
    name?: true
    logo?: true
    shortDescription?: true
    email?: true
    phone?: true
  }

  export type BankCountAggregateInputType = {
    id?: true
    name?: true
    logo?: true
    shortDescription?: true
    email?: true
    phone?: true
    _all?: true
  }

  export type BankAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bank to aggregate.
     */
    where?: BankWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Banks to fetch.
     */
    orderBy?: BankOrderByWithRelationInput | BankOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BankWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Banks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Banks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Banks
    **/
    _count?: true | BankCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BankAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BankSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BankMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BankMaxAggregateInputType
  }

  export type GetBankAggregateType<T extends BankAggregateArgs> = {
        [P in keyof T & keyof AggregateBank]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBank[P]>
      : GetScalarType<T[P], AggregateBank[P]>
  }




  export type BankGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BankWhereInput
    orderBy?: BankOrderByWithAggregationInput | BankOrderByWithAggregationInput[]
    by: BankScalarFieldEnum[] | BankScalarFieldEnum
    having?: BankScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BankCountAggregateInputType | true
    _avg?: BankAvgAggregateInputType
    _sum?: BankSumAggregateInputType
    _min?: BankMinAggregateInputType
    _max?: BankMaxAggregateInputType
  }

  export type BankGroupByOutputType = {
    id: number
    name: string
    logo: string
    shortDescription: string
    email: string
    phone: string
    _count: BankCountAggregateOutputType | null
    _avg: BankAvgAggregateOutputType | null
    _sum: BankSumAggregateOutputType | null
    _min: BankMinAggregateOutputType | null
    _max: BankMaxAggregateOutputType | null
  }

  type GetBankGroupByPayload<T extends BankGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BankGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BankGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BankGroupByOutputType[P]>
            : GetScalarType<T[P], BankGroupByOutputType[P]>
        }
      >
    >


  export type BankSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    logo?: boolean
    shortDescription?: boolean
    email?: boolean
    phone?: boolean
    userBanks?: boolean | Bank$userBanksArgs<ExtArgs>
    _count?: boolean | BankCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bank"]>

  export type BankSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    logo?: boolean
    shortDescription?: boolean
    email?: boolean
    phone?: boolean
  }, ExtArgs["result"]["bank"]>

  export type BankSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    logo?: boolean
    shortDescription?: boolean
    email?: boolean
    phone?: boolean
  }, ExtArgs["result"]["bank"]>

  export type BankSelectScalar = {
    id?: boolean
    name?: boolean
    logo?: boolean
    shortDescription?: boolean
    email?: boolean
    phone?: boolean
  }

  export type BankOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "logo" | "shortDescription" | "email" | "phone", ExtArgs["result"]["bank"]>
  export type BankInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userBanks?: boolean | Bank$userBanksArgs<ExtArgs>
    _count?: boolean | BankCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BankIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type BankIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BankPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Bank"
    objects: {
      userBanks: Prisma.$UserBankPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      logo: string
      shortDescription: string
      email: string
      phone: string
    }, ExtArgs["result"]["bank"]>
    composites: {}
  }

  type BankGetPayload<S extends boolean | null | undefined | BankDefaultArgs> = $Result.GetResult<Prisma.$BankPayload, S>

  type BankCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BankFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BankCountAggregateInputType | true
    }

  export interface BankDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Bank'], meta: { name: 'Bank' } }
    /**
     * Find zero or one Bank that matches the filter.
     * @param {BankFindUniqueArgs} args - Arguments to find a Bank
     * @example
     * // Get one Bank
     * const bank = await prisma.bank.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BankFindUniqueArgs>(args: SelectSubset<T, BankFindUniqueArgs<ExtArgs>>): Prisma__BankClient<$Result.GetResult<Prisma.$BankPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Bank that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BankFindUniqueOrThrowArgs} args - Arguments to find a Bank
     * @example
     * // Get one Bank
     * const bank = await prisma.bank.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BankFindUniqueOrThrowArgs>(args: SelectSubset<T, BankFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BankClient<$Result.GetResult<Prisma.$BankPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bank that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankFindFirstArgs} args - Arguments to find a Bank
     * @example
     * // Get one Bank
     * const bank = await prisma.bank.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BankFindFirstArgs>(args?: SelectSubset<T, BankFindFirstArgs<ExtArgs>>): Prisma__BankClient<$Result.GetResult<Prisma.$BankPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bank that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankFindFirstOrThrowArgs} args - Arguments to find a Bank
     * @example
     * // Get one Bank
     * const bank = await prisma.bank.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BankFindFirstOrThrowArgs>(args?: SelectSubset<T, BankFindFirstOrThrowArgs<ExtArgs>>): Prisma__BankClient<$Result.GetResult<Prisma.$BankPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Banks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Banks
     * const banks = await prisma.bank.findMany()
     * 
     * // Get first 10 Banks
     * const banks = await prisma.bank.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bankWithIdOnly = await prisma.bank.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BankFindManyArgs>(args?: SelectSubset<T, BankFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BankPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Bank.
     * @param {BankCreateArgs} args - Arguments to create a Bank.
     * @example
     * // Create one Bank
     * const Bank = await prisma.bank.create({
     *   data: {
     *     // ... data to create a Bank
     *   }
     * })
     * 
     */
    create<T extends BankCreateArgs>(args: SelectSubset<T, BankCreateArgs<ExtArgs>>): Prisma__BankClient<$Result.GetResult<Prisma.$BankPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Banks.
     * @param {BankCreateManyArgs} args - Arguments to create many Banks.
     * @example
     * // Create many Banks
     * const bank = await prisma.bank.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BankCreateManyArgs>(args?: SelectSubset<T, BankCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Banks and returns the data saved in the database.
     * @param {BankCreateManyAndReturnArgs} args - Arguments to create many Banks.
     * @example
     * // Create many Banks
     * const bank = await prisma.bank.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Banks and only return the `id`
     * const bankWithIdOnly = await prisma.bank.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BankCreateManyAndReturnArgs>(args?: SelectSubset<T, BankCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BankPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Bank.
     * @param {BankDeleteArgs} args - Arguments to delete one Bank.
     * @example
     * // Delete one Bank
     * const Bank = await prisma.bank.delete({
     *   where: {
     *     // ... filter to delete one Bank
     *   }
     * })
     * 
     */
    delete<T extends BankDeleteArgs>(args: SelectSubset<T, BankDeleteArgs<ExtArgs>>): Prisma__BankClient<$Result.GetResult<Prisma.$BankPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Bank.
     * @param {BankUpdateArgs} args - Arguments to update one Bank.
     * @example
     * // Update one Bank
     * const bank = await prisma.bank.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BankUpdateArgs>(args: SelectSubset<T, BankUpdateArgs<ExtArgs>>): Prisma__BankClient<$Result.GetResult<Prisma.$BankPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Banks.
     * @param {BankDeleteManyArgs} args - Arguments to filter Banks to delete.
     * @example
     * // Delete a few Banks
     * const { count } = await prisma.bank.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BankDeleteManyArgs>(args?: SelectSubset<T, BankDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Banks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Banks
     * const bank = await prisma.bank.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BankUpdateManyArgs>(args: SelectSubset<T, BankUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Banks and returns the data updated in the database.
     * @param {BankUpdateManyAndReturnArgs} args - Arguments to update many Banks.
     * @example
     * // Update many Banks
     * const bank = await prisma.bank.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Banks and only return the `id`
     * const bankWithIdOnly = await prisma.bank.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BankUpdateManyAndReturnArgs>(args: SelectSubset<T, BankUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BankPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Bank.
     * @param {BankUpsertArgs} args - Arguments to update or create a Bank.
     * @example
     * // Update or create a Bank
     * const bank = await prisma.bank.upsert({
     *   create: {
     *     // ... data to create a Bank
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bank we want to update
     *   }
     * })
     */
    upsert<T extends BankUpsertArgs>(args: SelectSubset<T, BankUpsertArgs<ExtArgs>>): Prisma__BankClient<$Result.GetResult<Prisma.$BankPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Banks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankCountArgs} args - Arguments to filter Banks to count.
     * @example
     * // Count the number of Banks
     * const count = await prisma.bank.count({
     *   where: {
     *     // ... the filter for the Banks we want to count
     *   }
     * })
    **/
    count<T extends BankCountArgs>(
      args?: Subset<T, BankCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BankCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bank.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BankAggregateArgs>(args: Subset<T, BankAggregateArgs>): Prisma.PrismaPromise<GetBankAggregateType<T>>

    /**
     * Group by Bank.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BankGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BankGroupByArgs['orderBy'] }
        : { orderBy?: BankGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BankGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBankGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Bank model
   */
  readonly fields: BankFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Bank.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BankClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userBanks<T extends Bank$userBanksArgs<ExtArgs> = {}>(args?: Subset<T, Bank$userBanksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserBankPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Bank model
   */
  interface BankFieldRefs {
    readonly id: FieldRef<"Bank", 'Int'>
    readonly name: FieldRef<"Bank", 'String'>
    readonly logo: FieldRef<"Bank", 'String'>
    readonly shortDescription: FieldRef<"Bank", 'String'>
    readonly email: FieldRef<"Bank", 'String'>
    readonly phone: FieldRef<"Bank", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Bank findUnique
   */
  export type BankFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bank
     */
    select?: BankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bank
     */
    omit?: BankOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankInclude<ExtArgs> | null
    /**
     * Filter, which Bank to fetch.
     */
    where: BankWhereUniqueInput
  }

  /**
   * Bank findUniqueOrThrow
   */
  export type BankFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bank
     */
    select?: BankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bank
     */
    omit?: BankOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankInclude<ExtArgs> | null
    /**
     * Filter, which Bank to fetch.
     */
    where: BankWhereUniqueInput
  }

  /**
   * Bank findFirst
   */
  export type BankFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bank
     */
    select?: BankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bank
     */
    omit?: BankOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankInclude<ExtArgs> | null
    /**
     * Filter, which Bank to fetch.
     */
    where?: BankWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Banks to fetch.
     */
    orderBy?: BankOrderByWithRelationInput | BankOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Banks.
     */
    cursor?: BankWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Banks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Banks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Banks.
     */
    distinct?: BankScalarFieldEnum | BankScalarFieldEnum[]
  }

  /**
   * Bank findFirstOrThrow
   */
  export type BankFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bank
     */
    select?: BankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bank
     */
    omit?: BankOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankInclude<ExtArgs> | null
    /**
     * Filter, which Bank to fetch.
     */
    where?: BankWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Banks to fetch.
     */
    orderBy?: BankOrderByWithRelationInput | BankOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Banks.
     */
    cursor?: BankWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Banks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Banks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Banks.
     */
    distinct?: BankScalarFieldEnum | BankScalarFieldEnum[]
  }

  /**
   * Bank findMany
   */
  export type BankFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bank
     */
    select?: BankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bank
     */
    omit?: BankOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankInclude<ExtArgs> | null
    /**
     * Filter, which Banks to fetch.
     */
    where?: BankWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Banks to fetch.
     */
    orderBy?: BankOrderByWithRelationInput | BankOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Banks.
     */
    cursor?: BankWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Banks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Banks.
     */
    skip?: number
    distinct?: BankScalarFieldEnum | BankScalarFieldEnum[]
  }

  /**
   * Bank create
   */
  export type BankCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bank
     */
    select?: BankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bank
     */
    omit?: BankOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankInclude<ExtArgs> | null
    /**
     * The data needed to create a Bank.
     */
    data: XOR<BankCreateInput, BankUncheckedCreateInput>
  }

  /**
   * Bank createMany
   */
  export type BankCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Banks.
     */
    data: BankCreateManyInput | BankCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Bank createManyAndReturn
   */
  export type BankCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bank
     */
    select?: BankSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Bank
     */
    omit?: BankOmit<ExtArgs> | null
    /**
     * The data used to create many Banks.
     */
    data: BankCreateManyInput | BankCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Bank update
   */
  export type BankUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bank
     */
    select?: BankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bank
     */
    omit?: BankOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankInclude<ExtArgs> | null
    /**
     * The data needed to update a Bank.
     */
    data: XOR<BankUpdateInput, BankUncheckedUpdateInput>
    /**
     * Choose, which Bank to update.
     */
    where: BankWhereUniqueInput
  }

  /**
   * Bank updateMany
   */
  export type BankUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Banks.
     */
    data: XOR<BankUpdateManyMutationInput, BankUncheckedUpdateManyInput>
    /**
     * Filter which Banks to update
     */
    where?: BankWhereInput
    /**
     * Limit how many Banks to update.
     */
    limit?: number
  }

  /**
   * Bank updateManyAndReturn
   */
  export type BankUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bank
     */
    select?: BankSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Bank
     */
    omit?: BankOmit<ExtArgs> | null
    /**
     * The data used to update Banks.
     */
    data: XOR<BankUpdateManyMutationInput, BankUncheckedUpdateManyInput>
    /**
     * Filter which Banks to update
     */
    where?: BankWhereInput
    /**
     * Limit how many Banks to update.
     */
    limit?: number
  }

  /**
   * Bank upsert
   */
  export type BankUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bank
     */
    select?: BankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bank
     */
    omit?: BankOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankInclude<ExtArgs> | null
    /**
     * The filter to search for the Bank to update in case it exists.
     */
    where: BankWhereUniqueInput
    /**
     * In case the Bank found by the `where` argument doesn't exist, create a new Bank with this data.
     */
    create: XOR<BankCreateInput, BankUncheckedCreateInput>
    /**
     * In case the Bank was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BankUpdateInput, BankUncheckedUpdateInput>
  }

  /**
   * Bank delete
   */
  export type BankDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bank
     */
    select?: BankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bank
     */
    omit?: BankOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankInclude<ExtArgs> | null
    /**
     * Filter which Bank to delete.
     */
    where: BankWhereUniqueInput
  }

  /**
   * Bank deleteMany
   */
  export type BankDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Banks to delete
     */
    where?: BankWhereInput
    /**
     * Limit how many Banks to delete.
     */
    limit?: number
  }

  /**
   * Bank.userBanks
   */
  export type Bank$userBanksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBank
     */
    select?: UserBankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBank
     */
    omit?: UserBankOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBankInclude<ExtArgs> | null
    where?: UserBankWhereInput
    orderBy?: UserBankOrderByWithRelationInput | UserBankOrderByWithRelationInput[]
    cursor?: UserBankWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserBankScalarFieldEnum | UserBankScalarFieldEnum[]
  }

  /**
   * Bank without action
   */
  export type BankDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bank
     */
    select?: BankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bank
     */
    omit?: BankOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankInclude<ExtArgs> | null
  }


  /**
   * Model UserBank
   */

  export type AggregateUserBank = {
    _count: UserBankCountAggregateOutputType | null
    _avg: UserBankAvgAggregateOutputType | null
    _sum: UserBankSumAggregateOutputType | null
    _min: UserBankMinAggregateOutputType | null
    _max: UserBankMaxAggregateOutputType | null
  }

  export type UserBankAvgAggregateOutputType = {
    id: number | null
    bankId: number | null
  }

  export type UserBankSumAggregateOutputType = {
    id: number | null
    bankId: number | null
  }

  export type UserBankMinAggregateOutputType = {
    id: number | null
    userId: string | null
    bankId: number | null
    accountNumber: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserBankMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    bankId: number | null
    accountNumber: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserBankCountAggregateOutputType = {
    id: number
    userId: number
    bankId: number
    accountNumber: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserBankAvgAggregateInputType = {
    id?: true
    bankId?: true
  }

  export type UserBankSumAggregateInputType = {
    id?: true
    bankId?: true
  }

  export type UserBankMinAggregateInputType = {
    id?: true
    userId?: true
    bankId?: true
    accountNumber?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserBankMaxAggregateInputType = {
    id?: true
    userId?: true
    bankId?: true
    accountNumber?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserBankCountAggregateInputType = {
    id?: true
    userId?: true
    bankId?: true
    accountNumber?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserBankAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserBank to aggregate.
     */
    where?: UserBankWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserBanks to fetch.
     */
    orderBy?: UserBankOrderByWithRelationInput | UserBankOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserBankWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserBanks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserBanks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserBanks
    **/
    _count?: true | UserBankCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserBankAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserBankSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserBankMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserBankMaxAggregateInputType
  }

  export type GetUserBankAggregateType<T extends UserBankAggregateArgs> = {
        [P in keyof T & keyof AggregateUserBank]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserBank[P]>
      : GetScalarType<T[P], AggregateUserBank[P]>
  }




  export type UserBankGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserBankWhereInput
    orderBy?: UserBankOrderByWithAggregationInput | UserBankOrderByWithAggregationInput[]
    by: UserBankScalarFieldEnum[] | UserBankScalarFieldEnum
    having?: UserBankScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserBankCountAggregateInputType | true
    _avg?: UserBankAvgAggregateInputType
    _sum?: UserBankSumAggregateInputType
    _min?: UserBankMinAggregateInputType
    _max?: UserBankMaxAggregateInputType
  }

  export type UserBankGroupByOutputType = {
    id: number
    userId: string
    bankId: number
    accountNumber: string
    createdAt: Date
    updatedAt: Date
    _count: UserBankCountAggregateOutputType | null
    _avg: UserBankAvgAggregateOutputType | null
    _sum: UserBankSumAggregateOutputType | null
    _min: UserBankMinAggregateOutputType | null
    _max: UserBankMaxAggregateOutputType | null
  }

  type GetUserBankGroupByPayload<T extends UserBankGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserBankGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserBankGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserBankGroupByOutputType[P]>
            : GetScalarType<T[P], UserBankGroupByOutputType[P]>
        }
      >
    >


  export type UserBankSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    bankId?: boolean
    accountNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    bank?: boolean | BankDefaultArgs<ExtArgs>
    savingsAccount?: boolean | UserBank$savingsAccountArgs<ExtArgs>
    checkingsAccount?: boolean | UserBank$checkingsAccountArgs<ExtArgs>
    investmentAccount?: boolean | UserBank$investmentAccountArgs<ExtArgs>
  }, ExtArgs["result"]["userBank"]>

  export type UserBankSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    bankId?: boolean
    accountNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    bank?: boolean | BankDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userBank"]>

  export type UserBankSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    bankId?: boolean
    accountNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    bank?: boolean | BankDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userBank"]>

  export type UserBankSelectScalar = {
    id?: boolean
    userId?: boolean
    bankId?: boolean
    accountNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserBankOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "bankId" | "accountNumber" | "createdAt" | "updatedAt", ExtArgs["result"]["userBank"]>
  export type UserBankInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    bank?: boolean | BankDefaultArgs<ExtArgs>
    savingsAccount?: boolean | UserBank$savingsAccountArgs<ExtArgs>
    checkingsAccount?: boolean | UserBank$checkingsAccountArgs<ExtArgs>
    investmentAccount?: boolean | UserBank$investmentAccountArgs<ExtArgs>
  }
  export type UserBankIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    bank?: boolean | BankDefaultArgs<ExtArgs>
  }
  export type UserBankIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    bank?: boolean | BankDefaultArgs<ExtArgs>
  }

  export type $UserBankPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserBank"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      bank: Prisma.$BankPayload<ExtArgs>
      savingsAccount: Prisma.$SavingsAccountPayload<ExtArgs> | null
      checkingsAccount: Prisma.$CheckingsAccountPayload<ExtArgs> | null
      investmentAccount: Prisma.$InvestmentAccountPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string
      bankId: number
      accountNumber: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userBank"]>
    composites: {}
  }

  type UserBankGetPayload<S extends boolean | null | undefined | UserBankDefaultArgs> = $Result.GetResult<Prisma.$UserBankPayload, S>

  type UserBankCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserBankFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserBankCountAggregateInputType | true
    }

  export interface UserBankDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserBank'], meta: { name: 'UserBank' } }
    /**
     * Find zero or one UserBank that matches the filter.
     * @param {UserBankFindUniqueArgs} args - Arguments to find a UserBank
     * @example
     * // Get one UserBank
     * const userBank = await prisma.userBank.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserBankFindUniqueArgs>(args: SelectSubset<T, UserBankFindUniqueArgs<ExtArgs>>): Prisma__UserBankClient<$Result.GetResult<Prisma.$UserBankPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserBank that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserBankFindUniqueOrThrowArgs} args - Arguments to find a UserBank
     * @example
     * // Get one UserBank
     * const userBank = await prisma.userBank.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserBankFindUniqueOrThrowArgs>(args: SelectSubset<T, UserBankFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserBankClient<$Result.GetResult<Prisma.$UserBankPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserBank that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBankFindFirstArgs} args - Arguments to find a UserBank
     * @example
     * // Get one UserBank
     * const userBank = await prisma.userBank.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserBankFindFirstArgs>(args?: SelectSubset<T, UserBankFindFirstArgs<ExtArgs>>): Prisma__UserBankClient<$Result.GetResult<Prisma.$UserBankPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserBank that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBankFindFirstOrThrowArgs} args - Arguments to find a UserBank
     * @example
     * // Get one UserBank
     * const userBank = await prisma.userBank.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserBankFindFirstOrThrowArgs>(args?: SelectSubset<T, UserBankFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserBankClient<$Result.GetResult<Prisma.$UserBankPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserBanks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBankFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserBanks
     * const userBanks = await prisma.userBank.findMany()
     * 
     * // Get first 10 UserBanks
     * const userBanks = await prisma.userBank.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userBankWithIdOnly = await prisma.userBank.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserBankFindManyArgs>(args?: SelectSubset<T, UserBankFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserBankPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserBank.
     * @param {UserBankCreateArgs} args - Arguments to create a UserBank.
     * @example
     * // Create one UserBank
     * const UserBank = await prisma.userBank.create({
     *   data: {
     *     // ... data to create a UserBank
     *   }
     * })
     * 
     */
    create<T extends UserBankCreateArgs>(args: SelectSubset<T, UserBankCreateArgs<ExtArgs>>): Prisma__UserBankClient<$Result.GetResult<Prisma.$UserBankPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserBanks.
     * @param {UserBankCreateManyArgs} args - Arguments to create many UserBanks.
     * @example
     * // Create many UserBanks
     * const userBank = await prisma.userBank.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserBankCreateManyArgs>(args?: SelectSubset<T, UserBankCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserBanks and returns the data saved in the database.
     * @param {UserBankCreateManyAndReturnArgs} args - Arguments to create many UserBanks.
     * @example
     * // Create many UserBanks
     * const userBank = await prisma.userBank.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserBanks and only return the `id`
     * const userBankWithIdOnly = await prisma.userBank.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserBankCreateManyAndReturnArgs>(args?: SelectSubset<T, UserBankCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserBankPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserBank.
     * @param {UserBankDeleteArgs} args - Arguments to delete one UserBank.
     * @example
     * // Delete one UserBank
     * const UserBank = await prisma.userBank.delete({
     *   where: {
     *     // ... filter to delete one UserBank
     *   }
     * })
     * 
     */
    delete<T extends UserBankDeleteArgs>(args: SelectSubset<T, UserBankDeleteArgs<ExtArgs>>): Prisma__UserBankClient<$Result.GetResult<Prisma.$UserBankPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserBank.
     * @param {UserBankUpdateArgs} args - Arguments to update one UserBank.
     * @example
     * // Update one UserBank
     * const userBank = await prisma.userBank.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserBankUpdateArgs>(args: SelectSubset<T, UserBankUpdateArgs<ExtArgs>>): Prisma__UserBankClient<$Result.GetResult<Prisma.$UserBankPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserBanks.
     * @param {UserBankDeleteManyArgs} args - Arguments to filter UserBanks to delete.
     * @example
     * // Delete a few UserBanks
     * const { count } = await prisma.userBank.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserBankDeleteManyArgs>(args?: SelectSubset<T, UserBankDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserBanks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBankUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserBanks
     * const userBank = await prisma.userBank.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserBankUpdateManyArgs>(args: SelectSubset<T, UserBankUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserBanks and returns the data updated in the database.
     * @param {UserBankUpdateManyAndReturnArgs} args - Arguments to update many UserBanks.
     * @example
     * // Update many UserBanks
     * const userBank = await prisma.userBank.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserBanks and only return the `id`
     * const userBankWithIdOnly = await prisma.userBank.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserBankUpdateManyAndReturnArgs>(args: SelectSubset<T, UserBankUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserBankPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserBank.
     * @param {UserBankUpsertArgs} args - Arguments to update or create a UserBank.
     * @example
     * // Update or create a UserBank
     * const userBank = await prisma.userBank.upsert({
     *   create: {
     *     // ... data to create a UserBank
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserBank we want to update
     *   }
     * })
     */
    upsert<T extends UserBankUpsertArgs>(args: SelectSubset<T, UserBankUpsertArgs<ExtArgs>>): Prisma__UserBankClient<$Result.GetResult<Prisma.$UserBankPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserBanks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBankCountArgs} args - Arguments to filter UserBanks to count.
     * @example
     * // Count the number of UserBanks
     * const count = await prisma.userBank.count({
     *   where: {
     *     // ... the filter for the UserBanks we want to count
     *   }
     * })
    **/
    count<T extends UserBankCountArgs>(
      args?: Subset<T, UserBankCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserBankCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserBank.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBankAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserBankAggregateArgs>(args: Subset<T, UserBankAggregateArgs>): Prisma.PrismaPromise<GetUserBankAggregateType<T>>

    /**
     * Group by UserBank.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBankGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserBankGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserBankGroupByArgs['orderBy'] }
        : { orderBy?: UserBankGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserBankGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserBankGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserBank model
   */
  readonly fields: UserBankFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserBank.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserBankClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    bank<T extends BankDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BankDefaultArgs<ExtArgs>>): Prisma__BankClient<$Result.GetResult<Prisma.$BankPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    savingsAccount<T extends UserBank$savingsAccountArgs<ExtArgs> = {}>(args?: Subset<T, UserBank$savingsAccountArgs<ExtArgs>>): Prisma__SavingsAccountClient<$Result.GetResult<Prisma.$SavingsAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    checkingsAccount<T extends UserBank$checkingsAccountArgs<ExtArgs> = {}>(args?: Subset<T, UserBank$checkingsAccountArgs<ExtArgs>>): Prisma__CheckingsAccountClient<$Result.GetResult<Prisma.$CheckingsAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    investmentAccount<T extends UserBank$investmentAccountArgs<ExtArgs> = {}>(args?: Subset<T, UserBank$investmentAccountArgs<ExtArgs>>): Prisma__InvestmentAccountClient<$Result.GetResult<Prisma.$InvestmentAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserBank model
   */
  interface UserBankFieldRefs {
    readonly id: FieldRef<"UserBank", 'Int'>
    readonly userId: FieldRef<"UserBank", 'String'>
    readonly bankId: FieldRef<"UserBank", 'Int'>
    readonly accountNumber: FieldRef<"UserBank", 'String'>
    readonly createdAt: FieldRef<"UserBank", 'DateTime'>
    readonly updatedAt: FieldRef<"UserBank", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserBank findUnique
   */
  export type UserBankFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBank
     */
    select?: UserBankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBank
     */
    omit?: UserBankOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBankInclude<ExtArgs> | null
    /**
     * Filter, which UserBank to fetch.
     */
    where: UserBankWhereUniqueInput
  }

  /**
   * UserBank findUniqueOrThrow
   */
  export type UserBankFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBank
     */
    select?: UserBankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBank
     */
    omit?: UserBankOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBankInclude<ExtArgs> | null
    /**
     * Filter, which UserBank to fetch.
     */
    where: UserBankWhereUniqueInput
  }

  /**
   * UserBank findFirst
   */
  export type UserBankFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBank
     */
    select?: UserBankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBank
     */
    omit?: UserBankOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBankInclude<ExtArgs> | null
    /**
     * Filter, which UserBank to fetch.
     */
    where?: UserBankWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserBanks to fetch.
     */
    orderBy?: UserBankOrderByWithRelationInput | UserBankOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserBanks.
     */
    cursor?: UserBankWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserBanks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserBanks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserBanks.
     */
    distinct?: UserBankScalarFieldEnum | UserBankScalarFieldEnum[]
  }

  /**
   * UserBank findFirstOrThrow
   */
  export type UserBankFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBank
     */
    select?: UserBankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBank
     */
    omit?: UserBankOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBankInclude<ExtArgs> | null
    /**
     * Filter, which UserBank to fetch.
     */
    where?: UserBankWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserBanks to fetch.
     */
    orderBy?: UserBankOrderByWithRelationInput | UserBankOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserBanks.
     */
    cursor?: UserBankWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserBanks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserBanks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserBanks.
     */
    distinct?: UserBankScalarFieldEnum | UserBankScalarFieldEnum[]
  }

  /**
   * UserBank findMany
   */
  export type UserBankFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBank
     */
    select?: UserBankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBank
     */
    omit?: UserBankOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBankInclude<ExtArgs> | null
    /**
     * Filter, which UserBanks to fetch.
     */
    where?: UserBankWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserBanks to fetch.
     */
    orderBy?: UserBankOrderByWithRelationInput | UserBankOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserBanks.
     */
    cursor?: UserBankWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserBanks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserBanks.
     */
    skip?: number
    distinct?: UserBankScalarFieldEnum | UserBankScalarFieldEnum[]
  }

  /**
   * UserBank create
   */
  export type UserBankCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBank
     */
    select?: UserBankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBank
     */
    omit?: UserBankOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBankInclude<ExtArgs> | null
    /**
     * The data needed to create a UserBank.
     */
    data: XOR<UserBankCreateInput, UserBankUncheckedCreateInput>
  }

  /**
   * UserBank createMany
   */
  export type UserBankCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserBanks.
     */
    data: UserBankCreateManyInput | UserBankCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserBank createManyAndReturn
   */
  export type UserBankCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBank
     */
    select?: UserBankSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserBank
     */
    omit?: UserBankOmit<ExtArgs> | null
    /**
     * The data used to create many UserBanks.
     */
    data: UserBankCreateManyInput | UserBankCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBankIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserBank update
   */
  export type UserBankUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBank
     */
    select?: UserBankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBank
     */
    omit?: UserBankOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBankInclude<ExtArgs> | null
    /**
     * The data needed to update a UserBank.
     */
    data: XOR<UserBankUpdateInput, UserBankUncheckedUpdateInput>
    /**
     * Choose, which UserBank to update.
     */
    where: UserBankWhereUniqueInput
  }

  /**
   * UserBank updateMany
   */
  export type UserBankUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserBanks.
     */
    data: XOR<UserBankUpdateManyMutationInput, UserBankUncheckedUpdateManyInput>
    /**
     * Filter which UserBanks to update
     */
    where?: UserBankWhereInput
    /**
     * Limit how many UserBanks to update.
     */
    limit?: number
  }

  /**
   * UserBank updateManyAndReturn
   */
  export type UserBankUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBank
     */
    select?: UserBankSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserBank
     */
    omit?: UserBankOmit<ExtArgs> | null
    /**
     * The data used to update UserBanks.
     */
    data: XOR<UserBankUpdateManyMutationInput, UserBankUncheckedUpdateManyInput>
    /**
     * Filter which UserBanks to update
     */
    where?: UserBankWhereInput
    /**
     * Limit how many UserBanks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBankIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserBank upsert
   */
  export type UserBankUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBank
     */
    select?: UserBankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBank
     */
    omit?: UserBankOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBankInclude<ExtArgs> | null
    /**
     * The filter to search for the UserBank to update in case it exists.
     */
    where: UserBankWhereUniqueInput
    /**
     * In case the UserBank found by the `where` argument doesn't exist, create a new UserBank with this data.
     */
    create: XOR<UserBankCreateInput, UserBankUncheckedCreateInput>
    /**
     * In case the UserBank was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserBankUpdateInput, UserBankUncheckedUpdateInput>
  }

  /**
   * UserBank delete
   */
  export type UserBankDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBank
     */
    select?: UserBankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBank
     */
    omit?: UserBankOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBankInclude<ExtArgs> | null
    /**
     * Filter which UserBank to delete.
     */
    where: UserBankWhereUniqueInput
  }

  /**
   * UserBank deleteMany
   */
  export type UserBankDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserBanks to delete
     */
    where?: UserBankWhereInput
    /**
     * Limit how many UserBanks to delete.
     */
    limit?: number
  }

  /**
   * UserBank.savingsAccount
   */
  export type UserBank$savingsAccountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavingsAccount
     */
    select?: SavingsAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavingsAccount
     */
    omit?: SavingsAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavingsAccountInclude<ExtArgs> | null
    where?: SavingsAccountWhereInput
  }

  /**
   * UserBank.checkingsAccount
   */
  export type UserBank$checkingsAccountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckingsAccount
     */
    select?: CheckingsAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckingsAccount
     */
    omit?: CheckingsAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckingsAccountInclude<ExtArgs> | null
    where?: CheckingsAccountWhereInput
  }

  /**
   * UserBank.investmentAccount
   */
  export type UserBank$investmentAccountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvestmentAccount
     */
    select?: InvestmentAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvestmentAccount
     */
    omit?: InvestmentAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentAccountInclude<ExtArgs> | null
    where?: InvestmentAccountWhereInput
  }

  /**
   * UserBank without action
   */
  export type UserBankDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBank
     */
    select?: UserBankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBank
     */
    omit?: UserBankOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBankInclude<ExtArgs> | null
  }


  /**
   * Model InvestmentAccount
   */

  export type AggregateInvestmentAccount = {
    _count: InvestmentAccountCountAggregateOutputType | null
    _avg: InvestmentAccountAvgAggregateOutputType | null
    _sum: InvestmentAccountSumAggregateOutputType | null
    _min: InvestmentAccountMinAggregateOutputType | null
    _max: InvestmentAccountMaxAggregateOutputType | null
  }

  export type InvestmentAccountAvgAggregateOutputType = {
    id: number | null
    userBankId: number | null
    portfolio: number | null
    profitLoss: number | null
    cashBalance: number | null
  }

  export type InvestmentAccountSumAggregateOutputType = {
    id: number | null
    userBankId: number | null
    portfolio: number | null
    profitLoss: number | null
    cashBalance: number | null
  }

  export type InvestmentAccountMinAggregateOutputType = {
    id: number | null
    userBankId: number | null
    portfolio: number | null
    profitLoss: number | null
    cashBalance: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InvestmentAccountMaxAggregateOutputType = {
    id: number | null
    userBankId: number | null
    portfolio: number | null
    profitLoss: number | null
    cashBalance: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InvestmentAccountCountAggregateOutputType = {
    id: number
    userBankId: number
    portfolio: number
    profitLoss: number
    cashBalance: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type InvestmentAccountAvgAggregateInputType = {
    id?: true
    userBankId?: true
    portfolio?: true
    profitLoss?: true
    cashBalance?: true
  }

  export type InvestmentAccountSumAggregateInputType = {
    id?: true
    userBankId?: true
    portfolio?: true
    profitLoss?: true
    cashBalance?: true
  }

  export type InvestmentAccountMinAggregateInputType = {
    id?: true
    userBankId?: true
    portfolio?: true
    profitLoss?: true
    cashBalance?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InvestmentAccountMaxAggregateInputType = {
    id?: true
    userBankId?: true
    portfolio?: true
    profitLoss?: true
    cashBalance?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InvestmentAccountCountAggregateInputType = {
    id?: true
    userBankId?: true
    portfolio?: true
    profitLoss?: true
    cashBalance?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type InvestmentAccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InvestmentAccount to aggregate.
     */
    where?: InvestmentAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InvestmentAccounts to fetch.
     */
    orderBy?: InvestmentAccountOrderByWithRelationInput | InvestmentAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InvestmentAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InvestmentAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InvestmentAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InvestmentAccounts
    **/
    _count?: true | InvestmentAccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InvestmentAccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InvestmentAccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InvestmentAccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InvestmentAccountMaxAggregateInputType
  }

  export type GetInvestmentAccountAggregateType<T extends InvestmentAccountAggregateArgs> = {
        [P in keyof T & keyof AggregateInvestmentAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvestmentAccount[P]>
      : GetScalarType<T[P], AggregateInvestmentAccount[P]>
  }




  export type InvestmentAccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvestmentAccountWhereInput
    orderBy?: InvestmentAccountOrderByWithAggregationInput | InvestmentAccountOrderByWithAggregationInput[]
    by: InvestmentAccountScalarFieldEnum[] | InvestmentAccountScalarFieldEnum
    having?: InvestmentAccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InvestmentAccountCountAggregateInputType | true
    _avg?: InvestmentAccountAvgAggregateInputType
    _sum?: InvestmentAccountSumAggregateInputType
    _min?: InvestmentAccountMinAggregateInputType
    _max?: InvestmentAccountMaxAggregateInputType
  }

  export type InvestmentAccountGroupByOutputType = {
    id: number
    userBankId: number
    portfolio: number
    profitLoss: number
    cashBalance: number
    createdAt: Date
    updatedAt: Date
    _count: InvestmentAccountCountAggregateOutputType | null
    _avg: InvestmentAccountAvgAggregateOutputType | null
    _sum: InvestmentAccountSumAggregateOutputType | null
    _min: InvestmentAccountMinAggregateOutputType | null
    _max: InvestmentAccountMaxAggregateOutputType | null
  }

  type GetInvestmentAccountGroupByPayload<T extends InvestmentAccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InvestmentAccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InvestmentAccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InvestmentAccountGroupByOutputType[P]>
            : GetScalarType<T[P], InvestmentAccountGroupByOutputType[P]>
        }
      >
    >


  export type InvestmentAccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userBankId?: boolean
    portfolio?: boolean
    profitLoss?: boolean
    cashBalance?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userBank?: boolean | InvestmentAccount$userBankArgs<ExtArgs>
  }, ExtArgs["result"]["investmentAccount"]>

  export type InvestmentAccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userBankId?: boolean
    portfolio?: boolean
    profitLoss?: boolean
    cashBalance?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userBank?: boolean | InvestmentAccount$userBankArgs<ExtArgs>
  }, ExtArgs["result"]["investmentAccount"]>

  export type InvestmentAccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userBankId?: boolean
    portfolio?: boolean
    profitLoss?: boolean
    cashBalance?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userBank?: boolean | InvestmentAccount$userBankArgs<ExtArgs>
  }, ExtArgs["result"]["investmentAccount"]>

  export type InvestmentAccountSelectScalar = {
    id?: boolean
    userBankId?: boolean
    portfolio?: boolean
    profitLoss?: boolean
    cashBalance?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type InvestmentAccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userBankId" | "portfolio" | "profitLoss" | "cashBalance" | "createdAt" | "updatedAt", ExtArgs["result"]["investmentAccount"]>
  export type InvestmentAccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userBank?: boolean | InvestmentAccount$userBankArgs<ExtArgs>
  }
  export type InvestmentAccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userBank?: boolean | InvestmentAccount$userBankArgs<ExtArgs>
  }
  export type InvestmentAccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userBank?: boolean | InvestmentAccount$userBankArgs<ExtArgs>
  }

  export type $InvestmentAccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InvestmentAccount"
    objects: {
      userBank: Prisma.$UserBankPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userBankId: number
      portfolio: number
      profitLoss: number
      cashBalance: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["investmentAccount"]>
    composites: {}
  }

  type InvestmentAccountGetPayload<S extends boolean | null | undefined | InvestmentAccountDefaultArgs> = $Result.GetResult<Prisma.$InvestmentAccountPayload, S>

  type InvestmentAccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InvestmentAccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InvestmentAccountCountAggregateInputType | true
    }

  export interface InvestmentAccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InvestmentAccount'], meta: { name: 'InvestmentAccount' } }
    /**
     * Find zero or one InvestmentAccount that matches the filter.
     * @param {InvestmentAccountFindUniqueArgs} args - Arguments to find a InvestmentAccount
     * @example
     * // Get one InvestmentAccount
     * const investmentAccount = await prisma.investmentAccount.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InvestmentAccountFindUniqueArgs>(args: SelectSubset<T, InvestmentAccountFindUniqueArgs<ExtArgs>>): Prisma__InvestmentAccountClient<$Result.GetResult<Prisma.$InvestmentAccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one InvestmentAccount that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InvestmentAccountFindUniqueOrThrowArgs} args - Arguments to find a InvestmentAccount
     * @example
     * // Get one InvestmentAccount
     * const investmentAccount = await prisma.investmentAccount.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InvestmentAccountFindUniqueOrThrowArgs>(args: SelectSubset<T, InvestmentAccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InvestmentAccountClient<$Result.GetResult<Prisma.$InvestmentAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InvestmentAccount that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestmentAccountFindFirstArgs} args - Arguments to find a InvestmentAccount
     * @example
     * // Get one InvestmentAccount
     * const investmentAccount = await prisma.investmentAccount.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InvestmentAccountFindFirstArgs>(args?: SelectSubset<T, InvestmentAccountFindFirstArgs<ExtArgs>>): Prisma__InvestmentAccountClient<$Result.GetResult<Prisma.$InvestmentAccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InvestmentAccount that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestmentAccountFindFirstOrThrowArgs} args - Arguments to find a InvestmentAccount
     * @example
     * // Get one InvestmentAccount
     * const investmentAccount = await prisma.investmentAccount.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InvestmentAccountFindFirstOrThrowArgs>(args?: SelectSubset<T, InvestmentAccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__InvestmentAccountClient<$Result.GetResult<Prisma.$InvestmentAccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more InvestmentAccounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestmentAccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InvestmentAccounts
     * const investmentAccounts = await prisma.investmentAccount.findMany()
     * 
     * // Get first 10 InvestmentAccounts
     * const investmentAccounts = await prisma.investmentAccount.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const investmentAccountWithIdOnly = await prisma.investmentAccount.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InvestmentAccountFindManyArgs>(args?: SelectSubset<T, InvestmentAccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvestmentAccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a InvestmentAccount.
     * @param {InvestmentAccountCreateArgs} args - Arguments to create a InvestmentAccount.
     * @example
     * // Create one InvestmentAccount
     * const InvestmentAccount = await prisma.investmentAccount.create({
     *   data: {
     *     // ... data to create a InvestmentAccount
     *   }
     * })
     * 
     */
    create<T extends InvestmentAccountCreateArgs>(args: SelectSubset<T, InvestmentAccountCreateArgs<ExtArgs>>): Prisma__InvestmentAccountClient<$Result.GetResult<Prisma.$InvestmentAccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many InvestmentAccounts.
     * @param {InvestmentAccountCreateManyArgs} args - Arguments to create many InvestmentAccounts.
     * @example
     * // Create many InvestmentAccounts
     * const investmentAccount = await prisma.investmentAccount.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InvestmentAccountCreateManyArgs>(args?: SelectSubset<T, InvestmentAccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many InvestmentAccounts and returns the data saved in the database.
     * @param {InvestmentAccountCreateManyAndReturnArgs} args - Arguments to create many InvestmentAccounts.
     * @example
     * // Create many InvestmentAccounts
     * const investmentAccount = await prisma.investmentAccount.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many InvestmentAccounts and only return the `id`
     * const investmentAccountWithIdOnly = await prisma.investmentAccount.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InvestmentAccountCreateManyAndReturnArgs>(args?: SelectSubset<T, InvestmentAccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvestmentAccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a InvestmentAccount.
     * @param {InvestmentAccountDeleteArgs} args - Arguments to delete one InvestmentAccount.
     * @example
     * // Delete one InvestmentAccount
     * const InvestmentAccount = await prisma.investmentAccount.delete({
     *   where: {
     *     // ... filter to delete one InvestmentAccount
     *   }
     * })
     * 
     */
    delete<T extends InvestmentAccountDeleteArgs>(args: SelectSubset<T, InvestmentAccountDeleteArgs<ExtArgs>>): Prisma__InvestmentAccountClient<$Result.GetResult<Prisma.$InvestmentAccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one InvestmentAccount.
     * @param {InvestmentAccountUpdateArgs} args - Arguments to update one InvestmentAccount.
     * @example
     * // Update one InvestmentAccount
     * const investmentAccount = await prisma.investmentAccount.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InvestmentAccountUpdateArgs>(args: SelectSubset<T, InvestmentAccountUpdateArgs<ExtArgs>>): Prisma__InvestmentAccountClient<$Result.GetResult<Prisma.$InvestmentAccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more InvestmentAccounts.
     * @param {InvestmentAccountDeleteManyArgs} args - Arguments to filter InvestmentAccounts to delete.
     * @example
     * // Delete a few InvestmentAccounts
     * const { count } = await prisma.investmentAccount.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InvestmentAccountDeleteManyArgs>(args?: SelectSubset<T, InvestmentAccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InvestmentAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestmentAccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InvestmentAccounts
     * const investmentAccount = await prisma.investmentAccount.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InvestmentAccountUpdateManyArgs>(args: SelectSubset<T, InvestmentAccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InvestmentAccounts and returns the data updated in the database.
     * @param {InvestmentAccountUpdateManyAndReturnArgs} args - Arguments to update many InvestmentAccounts.
     * @example
     * // Update many InvestmentAccounts
     * const investmentAccount = await prisma.investmentAccount.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more InvestmentAccounts and only return the `id`
     * const investmentAccountWithIdOnly = await prisma.investmentAccount.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InvestmentAccountUpdateManyAndReturnArgs>(args: SelectSubset<T, InvestmentAccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvestmentAccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one InvestmentAccount.
     * @param {InvestmentAccountUpsertArgs} args - Arguments to update or create a InvestmentAccount.
     * @example
     * // Update or create a InvestmentAccount
     * const investmentAccount = await prisma.investmentAccount.upsert({
     *   create: {
     *     // ... data to create a InvestmentAccount
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InvestmentAccount we want to update
     *   }
     * })
     */
    upsert<T extends InvestmentAccountUpsertArgs>(args: SelectSubset<T, InvestmentAccountUpsertArgs<ExtArgs>>): Prisma__InvestmentAccountClient<$Result.GetResult<Prisma.$InvestmentAccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of InvestmentAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestmentAccountCountArgs} args - Arguments to filter InvestmentAccounts to count.
     * @example
     * // Count the number of InvestmentAccounts
     * const count = await prisma.investmentAccount.count({
     *   where: {
     *     // ... the filter for the InvestmentAccounts we want to count
     *   }
     * })
    **/
    count<T extends InvestmentAccountCountArgs>(
      args?: Subset<T, InvestmentAccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InvestmentAccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InvestmentAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestmentAccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InvestmentAccountAggregateArgs>(args: Subset<T, InvestmentAccountAggregateArgs>): Prisma.PrismaPromise<GetInvestmentAccountAggregateType<T>>

    /**
     * Group by InvestmentAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestmentAccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InvestmentAccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InvestmentAccountGroupByArgs['orderBy'] }
        : { orderBy?: InvestmentAccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InvestmentAccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvestmentAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InvestmentAccount model
   */
  readonly fields: InvestmentAccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InvestmentAccount.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InvestmentAccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userBank<T extends InvestmentAccount$userBankArgs<ExtArgs> = {}>(args?: Subset<T, InvestmentAccount$userBankArgs<ExtArgs>>): Prisma__UserBankClient<$Result.GetResult<Prisma.$UserBankPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the InvestmentAccount model
   */
  interface InvestmentAccountFieldRefs {
    readonly id: FieldRef<"InvestmentAccount", 'Int'>
    readonly userBankId: FieldRef<"InvestmentAccount", 'Int'>
    readonly portfolio: FieldRef<"InvestmentAccount", 'Float'>
    readonly profitLoss: FieldRef<"InvestmentAccount", 'Float'>
    readonly cashBalance: FieldRef<"InvestmentAccount", 'Float'>
    readonly createdAt: FieldRef<"InvestmentAccount", 'DateTime'>
    readonly updatedAt: FieldRef<"InvestmentAccount", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * InvestmentAccount findUnique
   */
  export type InvestmentAccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvestmentAccount
     */
    select?: InvestmentAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvestmentAccount
     */
    omit?: InvestmentAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentAccountInclude<ExtArgs> | null
    /**
     * Filter, which InvestmentAccount to fetch.
     */
    where: InvestmentAccountWhereUniqueInput
  }

  /**
   * InvestmentAccount findUniqueOrThrow
   */
  export type InvestmentAccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvestmentAccount
     */
    select?: InvestmentAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvestmentAccount
     */
    omit?: InvestmentAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentAccountInclude<ExtArgs> | null
    /**
     * Filter, which InvestmentAccount to fetch.
     */
    where: InvestmentAccountWhereUniqueInput
  }

  /**
   * InvestmentAccount findFirst
   */
  export type InvestmentAccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvestmentAccount
     */
    select?: InvestmentAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvestmentAccount
     */
    omit?: InvestmentAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentAccountInclude<ExtArgs> | null
    /**
     * Filter, which InvestmentAccount to fetch.
     */
    where?: InvestmentAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InvestmentAccounts to fetch.
     */
    orderBy?: InvestmentAccountOrderByWithRelationInput | InvestmentAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InvestmentAccounts.
     */
    cursor?: InvestmentAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InvestmentAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InvestmentAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InvestmentAccounts.
     */
    distinct?: InvestmentAccountScalarFieldEnum | InvestmentAccountScalarFieldEnum[]
  }

  /**
   * InvestmentAccount findFirstOrThrow
   */
  export type InvestmentAccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvestmentAccount
     */
    select?: InvestmentAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvestmentAccount
     */
    omit?: InvestmentAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentAccountInclude<ExtArgs> | null
    /**
     * Filter, which InvestmentAccount to fetch.
     */
    where?: InvestmentAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InvestmentAccounts to fetch.
     */
    orderBy?: InvestmentAccountOrderByWithRelationInput | InvestmentAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InvestmentAccounts.
     */
    cursor?: InvestmentAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InvestmentAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InvestmentAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InvestmentAccounts.
     */
    distinct?: InvestmentAccountScalarFieldEnum | InvestmentAccountScalarFieldEnum[]
  }

  /**
   * InvestmentAccount findMany
   */
  export type InvestmentAccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvestmentAccount
     */
    select?: InvestmentAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvestmentAccount
     */
    omit?: InvestmentAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentAccountInclude<ExtArgs> | null
    /**
     * Filter, which InvestmentAccounts to fetch.
     */
    where?: InvestmentAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InvestmentAccounts to fetch.
     */
    orderBy?: InvestmentAccountOrderByWithRelationInput | InvestmentAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InvestmentAccounts.
     */
    cursor?: InvestmentAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InvestmentAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InvestmentAccounts.
     */
    skip?: number
    distinct?: InvestmentAccountScalarFieldEnum | InvestmentAccountScalarFieldEnum[]
  }

  /**
   * InvestmentAccount create
   */
  export type InvestmentAccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvestmentAccount
     */
    select?: InvestmentAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvestmentAccount
     */
    omit?: InvestmentAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentAccountInclude<ExtArgs> | null
    /**
     * The data needed to create a InvestmentAccount.
     */
    data: XOR<InvestmentAccountCreateInput, InvestmentAccountUncheckedCreateInput>
  }

  /**
   * InvestmentAccount createMany
   */
  export type InvestmentAccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InvestmentAccounts.
     */
    data: InvestmentAccountCreateManyInput | InvestmentAccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InvestmentAccount createManyAndReturn
   */
  export type InvestmentAccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvestmentAccount
     */
    select?: InvestmentAccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InvestmentAccount
     */
    omit?: InvestmentAccountOmit<ExtArgs> | null
    /**
     * The data used to create many InvestmentAccounts.
     */
    data: InvestmentAccountCreateManyInput | InvestmentAccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentAccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * InvestmentAccount update
   */
  export type InvestmentAccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvestmentAccount
     */
    select?: InvestmentAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvestmentAccount
     */
    omit?: InvestmentAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentAccountInclude<ExtArgs> | null
    /**
     * The data needed to update a InvestmentAccount.
     */
    data: XOR<InvestmentAccountUpdateInput, InvestmentAccountUncheckedUpdateInput>
    /**
     * Choose, which InvestmentAccount to update.
     */
    where: InvestmentAccountWhereUniqueInput
  }

  /**
   * InvestmentAccount updateMany
   */
  export type InvestmentAccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InvestmentAccounts.
     */
    data: XOR<InvestmentAccountUpdateManyMutationInput, InvestmentAccountUncheckedUpdateManyInput>
    /**
     * Filter which InvestmentAccounts to update
     */
    where?: InvestmentAccountWhereInput
    /**
     * Limit how many InvestmentAccounts to update.
     */
    limit?: number
  }

  /**
   * InvestmentAccount updateManyAndReturn
   */
  export type InvestmentAccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvestmentAccount
     */
    select?: InvestmentAccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InvestmentAccount
     */
    omit?: InvestmentAccountOmit<ExtArgs> | null
    /**
     * The data used to update InvestmentAccounts.
     */
    data: XOR<InvestmentAccountUpdateManyMutationInput, InvestmentAccountUncheckedUpdateManyInput>
    /**
     * Filter which InvestmentAccounts to update
     */
    where?: InvestmentAccountWhereInput
    /**
     * Limit how many InvestmentAccounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentAccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * InvestmentAccount upsert
   */
  export type InvestmentAccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvestmentAccount
     */
    select?: InvestmentAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvestmentAccount
     */
    omit?: InvestmentAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentAccountInclude<ExtArgs> | null
    /**
     * The filter to search for the InvestmentAccount to update in case it exists.
     */
    where: InvestmentAccountWhereUniqueInput
    /**
     * In case the InvestmentAccount found by the `where` argument doesn't exist, create a new InvestmentAccount with this data.
     */
    create: XOR<InvestmentAccountCreateInput, InvestmentAccountUncheckedCreateInput>
    /**
     * In case the InvestmentAccount was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InvestmentAccountUpdateInput, InvestmentAccountUncheckedUpdateInput>
  }

  /**
   * InvestmentAccount delete
   */
  export type InvestmentAccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvestmentAccount
     */
    select?: InvestmentAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvestmentAccount
     */
    omit?: InvestmentAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentAccountInclude<ExtArgs> | null
    /**
     * Filter which InvestmentAccount to delete.
     */
    where: InvestmentAccountWhereUniqueInput
  }

  /**
   * InvestmentAccount deleteMany
   */
  export type InvestmentAccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InvestmentAccounts to delete
     */
    where?: InvestmentAccountWhereInput
    /**
     * Limit how many InvestmentAccounts to delete.
     */
    limit?: number
  }

  /**
   * InvestmentAccount.userBank
   */
  export type InvestmentAccount$userBankArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBank
     */
    select?: UserBankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBank
     */
    omit?: UserBankOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBankInclude<ExtArgs> | null
    where?: UserBankWhereInput
  }

  /**
   * InvestmentAccount without action
   */
  export type InvestmentAccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvestmentAccount
     */
    select?: InvestmentAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvestmentAccount
     */
    omit?: InvestmentAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentAccountInclude<ExtArgs> | null
  }


  /**
   * Model SavingsAccount
   */

  export type AggregateSavingsAccount = {
    _count: SavingsAccountCountAggregateOutputType | null
    _avg: SavingsAccountAvgAggregateOutputType | null
    _sum: SavingsAccountSumAggregateOutputType | null
    _min: SavingsAccountMinAggregateOutputType | null
    _max: SavingsAccountMaxAggregateOutputType | null
  }

  export type SavingsAccountAvgAggregateOutputType = {
    id: number | null
    userBankId: number | null
    balance: number | null
  }

  export type SavingsAccountSumAggregateOutputType = {
    id: number | null
    userBankId: number | null
    balance: number | null
  }

  export type SavingsAccountMinAggregateOutputType = {
    id: number | null
    userBankId: number | null
    balance: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SavingsAccountMaxAggregateOutputType = {
    id: number | null
    userBankId: number | null
    balance: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SavingsAccountCountAggregateOutputType = {
    id: number
    userBankId: number
    balance: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SavingsAccountAvgAggregateInputType = {
    id?: true
    userBankId?: true
    balance?: true
  }

  export type SavingsAccountSumAggregateInputType = {
    id?: true
    userBankId?: true
    balance?: true
  }

  export type SavingsAccountMinAggregateInputType = {
    id?: true
    userBankId?: true
    balance?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SavingsAccountMaxAggregateInputType = {
    id?: true
    userBankId?: true
    balance?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SavingsAccountCountAggregateInputType = {
    id?: true
    userBankId?: true
    balance?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SavingsAccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SavingsAccount to aggregate.
     */
    where?: SavingsAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavingsAccounts to fetch.
     */
    orderBy?: SavingsAccountOrderByWithRelationInput | SavingsAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SavingsAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavingsAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavingsAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SavingsAccounts
    **/
    _count?: true | SavingsAccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SavingsAccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SavingsAccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SavingsAccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SavingsAccountMaxAggregateInputType
  }

  export type GetSavingsAccountAggregateType<T extends SavingsAccountAggregateArgs> = {
        [P in keyof T & keyof AggregateSavingsAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSavingsAccount[P]>
      : GetScalarType<T[P], AggregateSavingsAccount[P]>
  }




  export type SavingsAccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SavingsAccountWhereInput
    orderBy?: SavingsAccountOrderByWithAggregationInput | SavingsAccountOrderByWithAggregationInput[]
    by: SavingsAccountScalarFieldEnum[] | SavingsAccountScalarFieldEnum
    having?: SavingsAccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SavingsAccountCountAggregateInputType | true
    _avg?: SavingsAccountAvgAggregateInputType
    _sum?: SavingsAccountSumAggregateInputType
    _min?: SavingsAccountMinAggregateInputType
    _max?: SavingsAccountMaxAggregateInputType
  }

  export type SavingsAccountGroupByOutputType = {
    id: number
    userBankId: number
    balance: number
    createdAt: Date
    updatedAt: Date
    _count: SavingsAccountCountAggregateOutputType | null
    _avg: SavingsAccountAvgAggregateOutputType | null
    _sum: SavingsAccountSumAggregateOutputType | null
    _min: SavingsAccountMinAggregateOutputType | null
    _max: SavingsAccountMaxAggregateOutputType | null
  }

  type GetSavingsAccountGroupByPayload<T extends SavingsAccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SavingsAccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SavingsAccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SavingsAccountGroupByOutputType[P]>
            : GetScalarType<T[P], SavingsAccountGroupByOutputType[P]>
        }
      >
    >


  export type SavingsAccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userBankId?: boolean
    balance?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userBank?: boolean | SavingsAccount$userBankArgs<ExtArgs>
  }, ExtArgs["result"]["savingsAccount"]>

  export type SavingsAccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userBankId?: boolean
    balance?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userBank?: boolean | SavingsAccount$userBankArgs<ExtArgs>
  }, ExtArgs["result"]["savingsAccount"]>

  export type SavingsAccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userBankId?: boolean
    balance?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userBank?: boolean | SavingsAccount$userBankArgs<ExtArgs>
  }, ExtArgs["result"]["savingsAccount"]>

  export type SavingsAccountSelectScalar = {
    id?: boolean
    userBankId?: boolean
    balance?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SavingsAccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userBankId" | "balance" | "createdAt" | "updatedAt", ExtArgs["result"]["savingsAccount"]>
  export type SavingsAccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userBank?: boolean | SavingsAccount$userBankArgs<ExtArgs>
  }
  export type SavingsAccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userBank?: boolean | SavingsAccount$userBankArgs<ExtArgs>
  }
  export type SavingsAccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userBank?: boolean | SavingsAccount$userBankArgs<ExtArgs>
  }

  export type $SavingsAccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SavingsAccount"
    objects: {
      userBank: Prisma.$UserBankPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userBankId: number
      balance: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["savingsAccount"]>
    composites: {}
  }

  type SavingsAccountGetPayload<S extends boolean | null | undefined | SavingsAccountDefaultArgs> = $Result.GetResult<Prisma.$SavingsAccountPayload, S>

  type SavingsAccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SavingsAccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SavingsAccountCountAggregateInputType | true
    }

  export interface SavingsAccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SavingsAccount'], meta: { name: 'SavingsAccount' } }
    /**
     * Find zero or one SavingsAccount that matches the filter.
     * @param {SavingsAccountFindUniqueArgs} args - Arguments to find a SavingsAccount
     * @example
     * // Get one SavingsAccount
     * const savingsAccount = await prisma.savingsAccount.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SavingsAccountFindUniqueArgs>(args: SelectSubset<T, SavingsAccountFindUniqueArgs<ExtArgs>>): Prisma__SavingsAccountClient<$Result.GetResult<Prisma.$SavingsAccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SavingsAccount that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SavingsAccountFindUniqueOrThrowArgs} args - Arguments to find a SavingsAccount
     * @example
     * // Get one SavingsAccount
     * const savingsAccount = await prisma.savingsAccount.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SavingsAccountFindUniqueOrThrowArgs>(args: SelectSubset<T, SavingsAccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SavingsAccountClient<$Result.GetResult<Prisma.$SavingsAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SavingsAccount that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavingsAccountFindFirstArgs} args - Arguments to find a SavingsAccount
     * @example
     * // Get one SavingsAccount
     * const savingsAccount = await prisma.savingsAccount.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SavingsAccountFindFirstArgs>(args?: SelectSubset<T, SavingsAccountFindFirstArgs<ExtArgs>>): Prisma__SavingsAccountClient<$Result.GetResult<Prisma.$SavingsAccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SavingsAccount that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavingsAccountFindFirstOrThrowArgs} args - Arguments to find a SavingsAccount
     * @example
     * // Get one SavingsAccount
     * const savingsAccount = await prisma.savingsAccount.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SavingsAccountFindFirstOrThrowArgs>(args?: SelectSubset<T, SavingsAccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__SavingsAccountClient<$Result.GetResult<Prisma.$SavingsAccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SavingsAccounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavingsAccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SavingsAccounts
     * const savingsAccounts = await prisma.savingsAccount.findMany()
     * 
     * // Get first 10 SavingsAccounts
     * const savingsAccounts = await prisma.savingsAccount.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const savingsAccountWithIdOnly = await prisma.savingsAccount.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SavingsAccountFindManyArgs>(args?: SelectSubset<T, SavingsAccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavingsAccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SavingsAccount.
     * @param {SavingsAccountCreateArgs} args - Arguments to create a SavingsAccount.
     * @example
     * // Create one SavingsAccount
     * const SavingsAccount = await prisma.savingsAccount.create({
     *   data: {
     *     // ... data to create a SavingsAccount
     *   }
     * })
     * 
     */
    create<T extends SavingsAccountCreateArgs>(args: SelectSubset<T, SavingsAccountCreateArgs<ExtArgs>>): Prisma__SavingsAccountClient<$Result.GetResult<Prisma.$SavingsAccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SavingsAccounts.
     * @param {SavingsAccountCreateManyArgs} args - Arguments to create many SavingsAccounts.
     * @example
     * // Create many SavingsAccounts
     * const savingsAccount = await prisma.savingsAccount.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SavingsAccountCreateManyArgs>(args?: SelectSubset<T, SavingsAccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SavingsAccounts and returns the data saved in the database.
     * @param {SavingsAccountCreateManyAndReturnArgs} args - Arguments to create many SavingsAccounts.
     * @example
     * // Create many SavingsAccounts
     * const savingsAccount = await prisma.savingsAccount.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SavingsAccounts and only return the `id`
     * const savingsAccountWithIdOnly = await prisma.savingsAccount.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SavingsAccountCreateManyAndReturnArgs>(args?: SelectSubset<T, SavingsAccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavingsAccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SavingsAccount.
     * @param {SavingsAccountDeleteArgs} args - Arguments to delete one SavingsAccount.
     * @example
     * // Delete one SavingsAccount
     * const SavingsAccount = await prisma.savingsAccount.delete({
     *   where: {
     *     // ... filter to delete one SavingsAccount
     *   }
     * })
     * 
     */
    delete<T extends SavingsAccountDeleteArgs>(args: SelectSubset<T, SavingsAccountDeleteArgs<ExtArgs>>): Prisma__SavingsAccountClient<$Result.GetResult<Prisma.$SavingsAccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SavingsAccount.
     * @param {SavingsAccountUpdateArgs} args - Arguments to update one SavingsAccount.
     * @example
     * // Update one SavingsAccount
     * const savingsAccount = await prisma.savingsAccount.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SavingsAccountUpdateArgs>(args: SelectSubset<T, SavingsAccountUpdateArgs<ExtArgs>>): Prisma__SavingsAccountClient<$Result.GetResult<Prisma.$SavingsAccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SavingsAccounts.
     * @param {SavingsAccountDeleteManyArgs} args - Arguments to filter SavingsAccounts to delete.
     * @example
     * // Delete a few SavingsAccounts
     * const { count } = await prisma.savingsAccount.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SavingsAccountDeleteManyArgs>(args?: SelectSubset<T, SavingsAccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SavingsAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavingsAccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SavingsAccounts
     * const savingsAccount = await prisma.savingsAccount.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SavingsAccountUpdateManyArgs>(args: SelectSubset<T, SavingsAccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SavingsAccounts and returns the data updated in the database.
     * @param {SavingsAccountUpdateManyAndReturnArgs} args - Arguments to update many SavingsAccounts.
     * @example
     * // Update many SavingsAccounts
     * const savingsAccount = await prisma.savingsAccount.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SavingsAccounts and only return the `id`
     * const savingsAccountWithIdOnly = await prisma.savingsAccount.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SavingsAccountUpdateManyAndReturnArgs>(args: SelectSubset<T, SavingsAccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavingsAccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SavingsAccount.
     * @param {SavingsAccountUpsertArgs} args - Arguments to update or create a SavingsAccount.
     * @example
     * // Update or create a SavingsAccount
     * const savingsAccount = await prisma.savingsAccount.upsert({
     *   create: {
     *     // ... data to create a SavingsAccount
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SavingsAccount we want to update
     *   }
     * })
     */
    upsert<T extends SavingsAccountUpsertArgs>(args: SelectSubset<T, SavingsAccountUpsertArgs<ExtArgs>>): Prisma__SavingsAccountClient<$Result.GetResult<Prisma.$SavingsAccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SavingsAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavingsAccountCountArgs} args - Arguments to filter SavingsAccounts to count.
     * @example
     * // Count the number of SavingsAccounts
     * const count = await prisma.savingsAccount.count({
     *   where: {
     *     // ... the filter for the SavingsAccounts we want to count
     *   }
     * })
    **/
    count<T extends SavingsAccountCountArgs>(
      args?: Subset<T, SavingsAccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SavingsAccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SavingsAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavingsAccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SavingsAccountAggregateArgs>(args: Subset<T, SavingsAccountAggregateArgs>): Prisma.PrismaPromise<GetSavingsAccountAggregateType<T>>

    /**
     * Group by SavingsAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavingsAccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SavingsAccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SavingsAccountGroupByArgs['orderBy'] }
        : { orderBy?: SavingsAccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SavingsAccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSavingsAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SavingsAccount model
   */
  readonly fields: SavingsAccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SavingsAccount.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SavingsAccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userBank<T extends SavingsAccount$userBankArgs<ExtArgs> = {}>(args?: Subset<T, SavingsAccount$userBankArgs<ExtArgs>>): Prisma__UserBankClient<$Result.GetResult<Prisma.$UserBankPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SavingsAccount model
   */
  interface SavingsAccountFieldRefs {
    readonly id: FieldRef<"SavingsAccount", 'Int'>
    readonly userBankId: FieldRef<"SavingsAccount", 'Int'>
    readonly balance: FieldRef<"SavingsAccount", 'Float'>
    readonly createdAt: FieldRef<"SavingsAccount", 'DateTime'>
    readonly updatedAt: FieldRef<"SavingsAccount", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SavingsAccount findUnique
   */
  export type SavingsAccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavingsAccount
     */
    select?: SavingsAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavingsAccount
     */
    omit?: SavingsAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavingsAccountInclude<ExtArgs> | null
    /**
     * Filter, which SavingsAccount to fetch.
     */
    where: SavingsAccountWhereUniqueInput
  }

  /**
   * SavingsAccount findUniqueOrThrow
   */
  export type SavingsAccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavingsAccount
     */
    select?: SavingsAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavingsAccount
     */
    omit?: SavingsAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavingsAccountInclude<ExtArgs> | null
    /**
     * Filter, which SavingsAccount to fetch.
     */
    where: SavingsAccountWhereUniqueInput
  }

  /**
   * SavingsAccount findFirst
   */
  export type SavingsAccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavingsAccount
     */
    select?: SavingsAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavingsAccount
     */
    omit?: SavingsAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavingsAccountInclude<ExtArgs> | null
    /**
     * Filter, which SavingsAccount to fetch.
     */
    where?: SavingsAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavingsAccounts to fetch.
     */
    orderBy?: SavingsAccountOrderByWithRelationInput | SavingsAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SavingsAccounts.
     */
    cursor?: SavingsAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavingsAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavingsAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SavingsAccounts.
     */
    distinct?: SavingsAccountScalarFieldEnum | SavingsAccountScalarFieldEnum[]
  }

  /**
   * SavingsAccount findFirstOrThrow
   */
  export type SavingsAccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavingsAccount
     */
    select?: SavingsAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavingsAccount
     */
    omit?: SavingsAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavingsAccountInclude<ExtArgs> | null
    /**
     * Filter, which SavingsAccount to fetch.
     */
    where?: SavingsAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavingsAccounts to fetch.
     */
    orderBy?: SavingsAccountOrderByWithRelationInput | SavingsAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SavingsAccounts.
     */
    cursor?: SavingsAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavingsAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavingsAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SavingsAccounts.
     */
    distinct?: SavingsAccountScalarFieldEnum | SavingsAccountScalarFieldEnum[]
  }

  /**
   * SavingsAccount findMany
   */
  export type SavingsAccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavingsAccount
     */
    select?: SavingsAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavingsAccount
     */
    omit?: SavingsAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavingsAccountInclude<ExtArgs> | null
    /**
     * Filter, which SavingsAccounts to fetch.
     */
    where?: SavingsAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavingsAccounts to fetch.
     */
    orderBy?: SavingsAccountOrderByWithRelationInput | SavingsAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SavingsAccounts.
     */
    cursor?: SavingsAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavingsAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavingsAccounts.
     */
    skip?: number
    distinct?: SavingsAccountScalarFieldEnum | SavingsAccountScalarFieldEnum[]
  }

  /**
   * SavingsAccount create
   */
  export type SavingsAccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavingsAccount
     */
    select?: SavingsAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavingsAccount
     */
    omit?: SavingsAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavingsAccountInclude<ExtArgs> | null
    /**
     * The data needed to create a SavingsAccount.
     */
    data: XOR<SavingsAccountCreateInput, SavingsAccountUncheckedCreateInput>
  }

  /**
   * SavingsAccount createMany
   */
  export type SavingsAccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SavingsAccounts.
     */
    data: SavingsAccountCreateManyInput | SavingsAccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SavingsAccount createManyAndReturn
   */
  export type SavingsAccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavingsAccount
     */
    select?: SavingsAccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SavingsAccount
     */
    omit?: SavingsAccountOmit<ExtArgs> | null
    /**
     * The data used to create many SavingsAccounts.
     */
    data: SavingsAccountCreateManyInput | SavingsAccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavingsAccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SavingsAccount update
   */
  export type SavingsAccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavingsAccount
     */
    select?: SavingsAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavingsAccount
     */
    omit?: SavingsAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavingsAccountInclude<ExtArgs> | null
    /**
     * The data needed to update a SavingsAccount.
     */
    data: XOR<SavingsAccountUpdateInput, SavingsAccountUncheckedUpdateInput>
    /**
     * Choose, which SavingsAccount to update.
     */
    where: SavingsAccountWhereUniqueInput
  }

  /**
   * SavingsAccount updateMany
   */
  export type SavingsAccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SavingsAccounts.
     */
    data: XOR<SavingsAccountUpdateManyMutationInput, SavingsAccountUncheckedUpdateManyInput>
    /**
     * Filter which SavingsAccounts to update
     */
    where?: SavingsAccountWhereInput
    /**
     * Limit how many SavingsAccounts to update.
     */
    limit?: number
  }

  /**
   * SavingsAccount updateManyAndReturn
   */
  export type SavingsAccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavingsAccount
     */
    select?: SavingsAccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SavingsAccount
     */
    omit?: SavingsAccountOmit<ExtArgs> | null
    /**
     * The data used to update SavingsAccounts.
     */
    data: XOR<SavingsAccountUpdateManyMutationInput, SavingsAccountUncheckedUpdateManyInput>
    /**
     * Filter which SavingsAccounts to update
     */
    where?: SavingsAccountWhereInput
    /**
     * Limit how many SavingsAccounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavingsAccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SavingsAccount upsert
   */
  export type SavingsAccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavingsAccount
     */
    select?: SavingsAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavingsAccount
     */
    omit?: SavingsAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavingsAccountInclude<ExtArgs> | null
    /**
     * The filter to search for the SavingsAccount to update in case it exists.
     */
    where: SavingsAccountWhereUniqueInput
    /**
     * In case the SavingsAccount found by the `where` argument doesn't exist, create a new SavingsAccount with this data.
     */
    create: XOR<SavingsAccountCreateInput, SavingsAccountUncheckedCreateInput>
    /**
     * In case the SavingsAccount was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SavingsAccountUpdateInput, SavingsAccountUncheckedUpdateInput>
  }

  /**
   * SavingsAccount delete
   */
  export type SavingsAccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavingsAccount
     */
    select?: SavingsAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavingsAccount
     */
    omit?: SavingsAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavingsAccountInclude<ExtArgs> | null
    /**
     * Filter which SavingsAccount to delete.
     */
    where: SavingsAccountWhereUniqueInput
  }

  /**
   * SavingsAccount deleteMany
   */
  export type SavingsAccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SavingsAccounts to delete
     */
    where?: SavingsAccountWhereInput
    /**
     * Limit how many SavingsAccounts to delete.
     */
    limit?: number
  }

  /**
   * SavingsAccount.userBank
   */
  export type SavingsAccount$userBankArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBank
     */
    select?: UserBankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBank
     */
    omit?: UserBankOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBankInclude<ExtArgs> | null
    where?: UserBankWhereInput
  }

  /**
   * SavingsAccount without action
   */
  export type SavingsAccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavingsAccount
     */
    select?: SavingsAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavingsAccount
     */
    omit?: SavingsAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavingsAccountInclude<ExtArgs> | null
  }


  /**
   * Model CheckingsAccount
   */

  export type AggregateCheckingsAccount = {
    _count: CheckingsAccountCountAggregateOutputType | null
    _avg: CheckingsAccountAvgAggregateOutputType | null
    _sum: CheckingsAccountSumAggregateOutputType | null
    _min: CheckingsAccountMinAggregateOutputType | null
    _max: CheckingsAccountMaxAggregateOutputType | null
  }

  export type CheckingsAccountAvgAggregateOutputType = {
    id: number | null
    userBankId: number | null
    balance: number | null
  }

  export type CheckingsAccountSumAggregateOutputType = {
    id: number | null
    userBankId: number | null
    balance: number | null
  }

  export type CheckingsAccountMinAggregateOutputType = {
    id: number | null
    userBankId: number | null
    balance: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CheckingsAccountMaxAggregateOutputType = {
    id: number | null
    userBankId: number | null
    balance: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CheckingsAccountCountAggregateOutputType = {
    id: number
    userBankId: number
    balance: number
    prevMonthsTransactionsSummary: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CheckingsAccountAvgAggregateInputType = {
    id?: true
    userBankId?: true
    balance?: true
  }

  export type CheckingsAccountSumAggregateInputType = {
    id?: true
    userBankId?: true
    balance?: true
  }

  export type CheckingsAccountMinAggregateInputType = {
    id?: true
    userBankId?: true
    balance?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CheckingsAccountMaxAggregateInputType = {
    id?: true
    userBankId?: true
    balance?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CheckingsAccountCountAggregateInputType = {
    id?: true
    userBankId?: true
    balance?: true
    prevMonthsTransactionsSummary?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CheckingsAccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CheckingsAccount to aggregate.
     */
    where?: CheckingsAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CheckingsAccounts to fetch.
     */
    orderBy?: CheckingsAccountOrderByWithRelationInput | CheckingsAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CheckingsAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CheckingsAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CheckingsAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CheckingsAccounts
    **/
    _count?: true | CheckingsAccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CheckingsAccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CheckingsAccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CheckingsAccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CheckingsAccountMaxAggregateInputType
  }

  export type GetCheckingsAccountAggregateType<T extends CheckingsAccountAggregateArgs> = {
        [P in keyof T & keyof AggregateCheckingsAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCheckingsAccount[P]>
      : GetScalarType<T[P], AggregateCheckingsAccount[P]>
  }




  export type CheckingsAccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CheckingsAccountWhereInput
    orderBy?: CheckingsAccountOrderByWithAggregationInput | CheckingsAccountOrderByWithAggregationInput[]
    by: CheckingsAccountScalarFieldEnum[] | CheckingsAccountScalarFieldEnum
    having?: CheckingsAccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CheckingsAccountCountAggregateInputType | true
    _avg?: CheckingsAccountAvgAggregateInputType
    _sum?: CheckingsAccountSumAggregateInputType
    _min?: CheckingsAccountMinAggregateInputType
    _max?: CheckingsAccountMaxAggregateInputType
  }

  export type CheckingsAccountGroupByOutputType = {
    id: number
    userBankId: number
    balance: number
    prevMonthsTransactionsSummary: JsonValue | null
    createdAt: Date
    updatedAt: Date
    _count: CheckingsAccountCountAggregateOutputType | null
    _avg: CheckingsAccountAvgAggregateOutputType | null
    _sum: CheckingsAccountSumAggregateOutputType | null
    _min: CheckingsAccountMinAggregateOutputType | null
    _max: CheckingsAccountMaxAggregateOutputType | null
  }

  type GetCheckingsAccountGroupByPayload<T extends CheckingsAccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CheckingsAccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CheckingsAccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CheckingsAccountGroupByOutputType[P]>
            : GetScalarType<T[P], CheckingsAccountGroupByOutputType[P]>
        }
      >
    >


  export type CheckingsAccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userBankId?: boolean
    balance?: boolean
    prevMonthsTransactionsSummary?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    transactions?: boolean | CheckingsAccount$transactionsArgs<ExtArgs>
    userBank?: boolean | CheckingsAccount$userBankArgs<ExtArgs>
    _count?: boolean | CheckingsAccountCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["checkingsAccount"]>

  export type CheckingsAccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userBankId?: boolean
    balance?: boolean
    prevMonthsTransactionsSummary?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userBank?: boolean | CheckingsAccount$userBankArgs<ExtArgs>
  }, ExtArgs["result"]["checkingsAccount"]>

  export type CheckingsAccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userBankId?: boolean
    balance?: boolean
    prevMonthsTransactionsSummary?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userBank?: boolean | CheckingsAccount$userBankArgs<ExtArgs>
  }, ExtArgs["result"]["checkingsAccount"]>

  export type CheckingsAccountSelectScalar = {
    id?: boolean
    userBankId?: boolean
    balance?: boolean
    prevMonthsTransactionsSummary?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CheckingsAccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userBankId" | "balance" | "prevMonthsTransactionsSummary" | "createdAt" | "updatedAt", ExtArgs["result"]["checkingsAccount"]>
  export type CheckingsAccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | CheckingsAccount$transactionsArgs<ExtArgs>
    userBank?: boolean | CheckingsAccount$userBankArgs<ExtArgs>
    _count?: boolean | CheckingsAccountCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CheckingsAccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userBank?: boolean | CheckingsAccount$userBankArgs<ExtArgs>
  }
  export type CheckingsAccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userBank?: boolean | CheckingsAccount$userBankArgs<ExtArgs>
  }

  export type $CheckingsAccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CheckingsAccount"
    objects: {
      transactions: Prisma.$TransactionPayload<ExtArgs>[]
      userBank: Prisma.$UserBankPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userBankId: number
      balance: number
      prevMonthsTransactionsSummary: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["checkingsAccount"]>
    composites: {}
  }

  type CheckingsAccountGetPayload<S extends boolean | null | undefined | CheckingsAccountDefaultArgs> = $Result.GetResult<Prisma.$CheckingsAccountPayload, S>

  type CheckingsAccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CheckingsAccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CheckingsAccountCountAggregateInputType | true
    }

  export interface CheckingsAccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CheckingsAccount'], meta: { name: 'CheckingsAccount' } }
    /**
     * Find zero or one CheckingsAccount that matches the filter.
     * @param {CheckingsAccountFindUniqueArgs} args - Arguments to find a CheckingsAccount
     * @example
     * // Get one CheckingsAccount
     * const checkingsAccount = await prisma.checkingsAccount.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CheckingsAccountFindUniqueArgs>(args: SelectSubset<T, CheckingsAccountFindUniqueArgs<ExtArgs>>): Prisma__CheckingsAccountClient<$Result.GetResult<Prisma.$CheckingsAccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CheckingsAccount that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CheckingsAccountFindUniqueOrThrowArgs} args - Arguments to find a CheckingsAccount
     * @example
     * // Get one CheckingsAccount
     * const checkingsAccount = await prisma.checkingsAccount.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CheckingsAccountFindUniqueOrThrowArgs>(args: SelectSubset<T, CheckingsAccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CheckingsAccountClient<$Result.GetResult<Prisma.$CheckingsAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CheckingsAccount that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckingsAccountFindFirstArgs} args - Arguments to find a CheckingsAccount
     * @example
     * // Get one CheckingsAccount
     * const checkingsAccount = await prisma.checkingsAccount.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CheckingsAccountFindFirstArgs>(args?: SelectSubset<T, CheckingsAccountFindFirstArgs<ExtArgs>>): Prisma__CheckingsAccountClient<$Result.GetResult<Prisma.$CheckingsAccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CheckingsAccount that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckingsAccountFindFirstOrThrowArgs} args - Arguments to find a CheckingsAccount
     * @example
     * // Get one CheckingsAccount
     * const checkingsAccount = await prisma.checkingsAccount.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CheckingsAccountFindFirstOrThrowArgs>(args?: SelectSubset<T, CheckingsAccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__CheckingsAccountClient<$Result.GetResult<Prisma.$CheckingsAccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CheckingsAccounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckingsAccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CheckingsAccounts
     * const checkingsAccounts = await prisma.checkingsAccount.findMany()
     * 
     * // Get first 10 CheckingsAccounts
     * const checkingsAccounts = await prisma.checkingsAccount.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const checkingsAccountWithIdOnly = await prisma.checkingsAccount.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CheckingsAccountFindManyArgs>(args?: SelectSubset<T, CheckingsAccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CheckingsAccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CheckingsAccount.
     * @param {CheckingsAccountCreateArgs} args - Arguments to create a CheckingsAccount.
     * @example
     * // Create one CheckingsAccount
     * const CheckingsAccount = await prisma.checkingsAccount.create({
     *   data: {
     *     // ... data to create a CheckingsAccount
     *   }
     * })
     * 
     */
    create<T extends CheckingsAccountCreateArgs>(args: SelectSubset<T, CheckingsAccountCreateArgs<ExtArgs>>): Prisma__CheckingsAccountClient<$Result.GetResult<Prisma.$CheckingsAccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CheckingsAccounts.
     * @param {CheckingsAccountCreateManyArgs} args - Arguments to create many CheckingsAccounts.
     * @example
     * // Create many CheckingsAccounts
     * const checkingsAccount = await prisma.checkingsAccount.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CheckingsAccountCreateManyArgs>(args?: SelectSubset<T, CheckingsAccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CheckingsAccounts and returns the data saved in the database.
     * @param {CheckingsAccountCreateManyAndReturnArgs} args - Arguments to create many CheckingsAccounts.
     * @example
     * // Create many CheckingsAccounts
     * const checkingsAccount = await prisma.checkingsAccount.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CheckingsAccounts and only return the `id`
     * const checkingsAccountWithIdOnly = await prisma.checkingsAccount.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CheckingsAccountCreateManyAndReturnArgs>(args?: SelectSubset<T, CheckingsAccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CheckingsAccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CheckingsAccount.
     * @param {CheckingsAccountDeleteArgs} args - Arguments to delete one CheckingsAccount.
     * @example
     * // Delete one CheckingsAccount
     * const CheckingsAccount = await prisma.checkingsAccount.delete({
     *   where: {
     *     // ... filter to delete one CheckingsAccount
     *   }
     * })
     * 
     */
    delete<T extends CheckingsAccountDeleteArgs>(args: SelectSubset<T, CheckingsAccountDeleteArgs<ExtArgs>>): Prisma__CheckingsAccountClient<$Result.GetResult<Prisma.$CheckingsAccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CheckingsAccount.
     * @param {CheckingsAccountUpdateArgs} args - Arguments to update one CheckingsAccount.
     * @example
     * // Update one CheckingsAccount
     * const checkingsAccount = await prisma.checkingsAccount.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CheckingsAccountUpdateArgs>(args: SelectSubset<T, CheckingsAccountUpdateArgs<ExtArgs>>): Prisma__CheckingsAccountClient<$Result.GetResult<Prisma.$CheckingsAccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CheckingsAccounts.
     * @param {CheckingsAccountDeleteManyArgs} args - Arguments to filter CheckingsAccounts to delete.
     * @example
     * // Delete a few CheckingsAccounts
     * const { count } = await prisma.checkingsAccount.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CheckingsAccountDeleteManyArgs>(args?: SelectSubset<T, CheckingsAccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CheckingsAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckingsAccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CheckingsAccounts
     * const checkingsAccount = await prisma.checkingsAccount.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CheckingsAccountUpdateManyArgs>(args: SelectSubset<T, CheckingsAccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CheckingsAccounts and returns the data updated in the database.
     * @param {CheckingsAccountUpdateManyAndReturnArgs} args - Arguments to update many CheckingsAccounts.
     * @example
     * // Update many CheckingsAccounts
     * const checkingsAccount = await prisma.checkingsAccount.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CheckingsAccounts and only return the `id`
     * const checkingsAccountWithIdOnly = await prisma.checkingsAccount.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CheckingsAccountUpdateManyAndReturnArgs>(args: SelectSubset<T, CheckingsAccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CheckingsAccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CheckingsAccount.
     * @param {CheckingsAccountUpsertArgs} args - Arguments to update or create a CheckingsAccount.
     * @example
     * // Update or create a CheckingsAccount
     * const checkingsAccount = await prisma.checkingsAccount.upsert({
     *   create: {
     *     // ... data to create a CheckingsAccount
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CheckingsAccount we want to update
     *   }
     * })
     */
    upsert<T extends CheckingsAccountUpsertArgs>(args: SelectSubset<T, CheckingsAccountUpsertArgs<ExtArgs>>): Prisma__CheckingsAccountClient<$Result.GetResult<Prisma.$CheckingsAccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CheckingsAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckingsAccountCountArgs} args - Arguments to filter CheckingsAccounts to count.
     * @example
     * // Count the number of CheckingsAccounts
     * const count = await prisma.checkingsAccount.count({
     *   where: {
     *     // ... the filter for the CheckingsAccounts we want to count
     *   }
     * })
    **/
    count<T extends CheckingsAccountCountArgs>(
      args?: Subset<T, CheckingsAccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CheckingsAccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CheckingsAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckingsAccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CheckingsAccountAggregateArgs>(args: Subset<T, CheckingsAccountAggregateArgs>): Prisma.PrismaPromise<GetCheckingsAccountAggregateType<T>>

    /**
     * Group by CheckingsAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckingsAccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CheckingsAccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CheckingsAccountGroupByArgs['orderBy'] }
        : { orderBy?: CheckingsAccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CheckingsAccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCheckingsAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CheckingsAccount model
   */
  readonly fields: CheckingsAccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CheckingsAccount.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CheckingsAccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    transactions<T extends CheckingsAccount$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, CheckingsAccount$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userBank<T extends CheckingsAccount$userBankArgs<ExtArgs> = {}>(args?: Subset<T, CheckingsAccount$userBankArgs<ExtArgs>>): Prisma__UserBankClient<$Result.GetResult<Prisma.$UserBankPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CheckingsAccount model
   */
  interface CheckingsAccountFieldRefs {
    readonly id: FieldRef<"CheckingsAccount", 'Int'>
    readonly userBankId: FieldRef<"CheckingsAccount", 'Int'>
    readonly balance: FieldRef<"CheckingsAccount", 'Float'>
    readonly prevMonthsTransactionsSummary: FieldRef<"CheckingsAccount", 'Json'>
    readonly createdAt: FieldRef<"CheckingsAccount", 'DateTime'>
    readonly updatedAt: FieldRef<"CheckingsAccount", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CheckingsAccount findUnique
   */
  export type CheckingsAccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckingsAccount
     */
    select?: CheckingsAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckingsAccount
     */
    omit?: CheckingsAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckingsAccountInclude<ExtArgs> | null
    /**
     * Filter, which CheckingsAccount to fetch.
     */
    where: CheckingsAccountWhereUniqueInput
  }

  /**
   * CheckingsAccount findUniqueOrThrow
   */
  export type CheckingsAccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckingsAccount
     */
    select?: CheckingsAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckingsAccount
     */
    omit?: CheckingsAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckingsAccountInclude<ExtArgs> | null
    /**
     * Filter, which CheckingsAccount to fetch.
     */
    where: CheckingsAccountWhereUniqueInput
  }

  /**
   * CheckingsAccount findFirst
   */
  export type CheckingsAccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckingsAccount
     */
    select?: CheckingsAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckingsAccount
     */
    omit?: CheckingsAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckingsAccountInclude<ExtArgs> | null
    /**
     * Filter, which CheckingsAccount to fetch.
     */
    where?: CheckingsAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CheckingsAccounts to fetch.
     */
    orderBy?: CheckingsAccountOrderByWithRelationInput | CheckingsAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CheckingsAccounts.
     */
    cursor?: CheckingsAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CheckingsAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CheckingsAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CheckingsAccounts.
     */
    distinct?: CheckingsAccountScalarFieldEnum | CheckingsAccountScalarFieldEnum[]
  }

  /**
   * CheckingsAccount findFirstOrThrow
   */
  export type CheckingsAccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckingsAccount
     */
    select?: CheckingsAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckingsAccount
     */
    omit?: CheckingsAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckingsAccountInclude<ExtArgs> | null
    /**
     * Filter, which CheckingsAccount to fetch.
     */
    where?: CheckingsAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CheckingsAccounts to fetch.
     */
    orderBy?: CheckingsAccountOrderByWithRelationInput | CheckingsAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CheckingsAccounts.
     */
    cursor?: CheckingsAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CheckingsAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CheckingsAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CheckingsAccounts.
     */
    distinct?: CheckingsAccountScalarFieldEnum | CheckingsAccountScalarFieldEnum[]
  }

  /**
   * CheckingsAccount findMany
   */
  export type CheckingsAccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckingsAccount
     */
    select?: CheckingsAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckingsAccount
     */
    omit?: CheckingsAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckingsAccountInclude<ExtArgs> | null
    /**
     * Filter, which CheckingsAccounts to fetch.
     */
    where?: CheckingsAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CheckingsAccounts to fetch.
     */
    orderBy?: CheckingsAccountOrderByWithRelationInput | CheckingsAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CheckingsAccounts.
     */
    cursor?: CheckingsAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CheckingsAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CheckingsAccounts.
     */
    skip?: number
    distinct?: CheckingsAccountScalarFieldEnum | CheckingsAccountScalarFieldEnum[]
  }

  /**
   * CheckingsAccount create
   */
  export type CheckingsAccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckingsAccount
     */
    select?: CheckingsAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckingsAccount
     */
    omit?: CheckingsAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckingsAccountInclude<ExtArgs> | null
    /**
     * The data needed to create a CheckingsAccount.
     */
    data: XOR<CheckingsAccountCreateInput, CheckingsAccountUncheckedCreateInput>
  }

  /**
   * CheckingsAccount createMany
   */
  export type CheckingsAccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CheckingsAccounts.
     */
    data: CheckingsAccountCreateManyInput | CheckingsAccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CheckingsAccount createManyAndReturn
   */
  export type CheckingsAccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckingsAccount
     */
    select?: CheckingsAccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CheckingsAccount
     */
    omit?: CheckingsAccountOmit<ExtArgs> | null
    /**
     * The data used to create many CheckingsAccounts.
     */
    data: CheckingsAccountCreateManyInput | CheckingsAccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckingsAccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CheckingsAccount update
   */
  export type CheckingsAccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckingsAccount
     */
    select?: CheckingsAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckingsAccount
     */
    omit?: CheckingsAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckingsAccountInclude<ExtArgs> | null
    /**
     * The data needed to update a CheckingsAccount.
     */
    data: XOR<CheckingsAccountUpdateInput, CheckingsAccountUncheckedUpdateInput>
    /**
     * Choose, which CheckingsAccount to update.
     */
    where: CheckingsAccountWhereUniqueInput
  }

  /**
   * CheckingsAccount updateMany
   */
  export type CheckingsAccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CheckingsAccounts.
     */
    data: XOR<CheckingsAccountUpdateManyMutationInput, CheckingsAccountUncheckedUpdateManyInput>
    /**
     * Filter which CheckingsAccounts to update
     */
    where?: CheckingsAccountWhereInput
    /**
     * Limit how many CheckingsAccounts to update.
     */
    limit?: number
  }

  /**
   * CheckingsAccount updateManyAndReturn
   */
  export type CheckingsAccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckingsAccount
     */
    select?: CheckingsAccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CheckingsAccount
     */
    omit?: CheckingsAccountOmit<ExtArgs> | null
    /**
     * The data used to update CheckingsAccounts.
     */
    data: XOR<CheckingsAccountUpdateManyMutationInput, CheckingsAccountUncheckedUpdateManyInput>
    /**
     * Filter which CheckingsAccounts to update
     */
    where?: CheckingsAccountWhereInput
    /**
     * Limit how many CheckingsAccounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckingsAccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CheckingsAccount upsert
   */
  export type CheckingsAccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckingsAccount
     */
    select?: CheckingsAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckingsAccount
     */
    omit?: CheckingsAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckingsAccountInclude<ExtArgs> | null
    /**
     * The filter to search for the CheckingsAccount to update in case it exists.
     */
    where: CheckingsAccountWhereUniqueInput
    /**
     * In case the CheckingsAccount found by the `where` argument doesn't exist, create a new CheckingsAccount with this data.
     */
    create: XOR<CheckingsAccountCreateInput, CheckingsAccountUncheckedCreateInput>
    /**
     * In case the CheckingsAccount was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CheckingsAccountUpdateInput, CheckingsAccountUncheckedUpdateInput>
  }

  /**
   * CheckingsAccount delete
   */
  export type CheckingsAccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckingsAccount
     */
    select?: CheckingsAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckingsAccount
     */
    omit?: CheckingsAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckingsAccountInclude<ExtArgs> | null
    /**
     * Filter which CheckingsAccount to delete.
     */
    where: CheckingsAccountWhereUniqueInput
  }

  /**
   * CheckingsAccount deleteMany
   */
  export type CheckingsAccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CheckingsAccounts to delete
     */
    where?: CheckingsAccountWhereInput
    /**
     * Limit how many CheckingsAccounts to delete.
     */
    limit?: number
  }

  /**
   * CheckingsAccount.transactions
   */
  export type CheckingsAccount$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * CheckingsAccount.userBank
   */
  export type CheckingsAccount$userBankArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBank
     */
    select?: UserBankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBank
     */
    omit?: UserBankOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBankInclude<ExtArgs> | null
    where?: UserBankWhereInput
  }

  /**
   * CheckingsAccount without action
   */
  export type CheckingsAccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckingsAccount
     */
    select?: CheckingsAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckingsAccount
     */
    omit?: CheckingsAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckingsAccountInclude<ExtArgs> | null
  }


  /**
   * Model Transaction
   */

  export type AggregateTransaction = {
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  export type TransactionAvgAggregateOutputType = {
    id: number | null
    amount: number | null
    checkingsAccountId: number | null
  }

  export type TransactionSumAggregateOutputType = {
    id: number | null
    amount: number | null
    checkingsAccountId: number | null
  }

  export type TransactionMinAggregateOutputType = {
    id: number | null
    amount: number | null
    date: Date | null
    description: string | null
    category: string | null
    createdAt: Date | null
    updatedAt: Date | null
    checkingsAccountId: number | null
  }

  export type TransactionMaxAggregateOutputType = {
    id: number | null
    amount: number | null
    date: Date | null
    description: string | null
    category: string | null
    createdAt: Date | null
    updatedAt: Date | null
    checkingsAccountId: number | null
  }

  export type TransactionCountAggregateOutputType = {
    id: number
    amount: number
    date: number
    description: number
    category: number
    createdAt: number
    updatedAt: number
    checkingsAccountId: number
    _all: number
  }


  export type TransactionAvgAggregateInputType = {
    id?: true
    amount?: true
    checkingsAccountId?: true
  }

  export type TransactionSumAggregateInputType = {
    id?: true
    amount?: true
    checkingsAccountId?: true
  }

  export type TransactionMinAggregateInputType = {
    id?: true
    amount?: true
    date?: true
    description?: true
    category?: true
    createdAt?: true
    updatedAt?: true
    checkingsAccountId?: true
  }

  export type TransactionMaxAggregateInputType = {
    id?: true
    amount?: true
    date?: true
    description?: true
    category?: true
    createdAt?: true
    updatedAt?: true
    checkingsAccountId?: true
  }

  export type TransactionCountAggregateInputType = {
    id?: true
    amount?: true
    date?: true
    description?: true
    category?: true
    createdAt?: true
    updatedAt?: true
    checkingsAccountId?: true
    _all?: true
  }

  export type TransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transaction to aggregate.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Transactions
    **/
    _count?: true | TransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionMaxAggregateInputType
  }

  export type GetTransactionAggregateType<T extends TransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransaction[P]>
      : GetScalarType<T[P], AggregateTransaction[P]>
  }




  export type TransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithAggregationInput | TransactionOrderByWithAggregationInput[]
    by: TransactionScalarFieldEnum[] | TransactionScalarFieldEnum
    having?: TransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionCountAggregateInputType | true
    _avg?: TransactionAvgAggregateInputType
    _sum?: TransactionSumAggregateInputType
    _min?: TransactionMinAggregateInputType
    _max?: TransactionMaxAggregateInputType
  }

  export type TransactionGroupByOutputType = {
    id: number
    amount: number
    date: Date
    description: string
    category: string
    createdAt: Date
    updatedAt: Date
    checkingsAccountId: number
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  type GetTransactionGroupByPayload<T extends TransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionGroupByOutputType[P]>
        }
      >
    >


  export type TransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    date?: boolean
    description?: boolean
    category?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    checkingsAccountId?: boolean
    checkingsAccount?: boolean | CheckingsAccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    date?: boolean
    description?: boolean
    category?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    checkingsAccountId?: boolean
    checkingsAccount?: boolean | CheckingsAccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    date?: boolean
    description?: boolean
    category?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    checkingsAccountId?: boolean
    checkingsAccount?: boolean | CheckingsAccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectScalar = {
    id?: boolean
    amount?: boolean
    date?: boolean
    description?: boolean
    category?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    checkingsAccountId?: boolean
  }

  export type TransactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "amount" | "date" | "description" | "category" | "createdAt" | "updatedAt" | "checkingsAccountId", ExtArgs["result"]["transaction"]>
  export type TransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    checkingsAccount?: boolean | CheckingsAccountDefaultArgs<ExtArgs>
  }
  export type TransactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    checkingsAccount?: boolean | CheckingsAccountDefaultArgs<ExtArgs>
  }
  export type TransactionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    checkingsAccount?: boolean | CheckingsAccountDefaultArgs<ExtArgs>
  }

  export type $TransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Transaction"
    objects: {
      checkingsAccount: Prisma.$CheckingsAccountPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      amount: number
      date: Date
      description: string
      category: string
      createdAt: Date
      updatedAt: Date
      checkingsAccountId: number
    }, ExtArgs["result"]["transaction"]>
    composites: {}
  }

  type TransactionGetPayload<S extends boolean | null | undefined | TransactionDefaultArgs> = $Result.GetResult<Prisma.$TransactionPayload, S>

  type TransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransactionCountAggregateInputType | true
    }

  export interface TransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Transaction'], meta: { name: 'Transaction' } }
    /**
     * Find zero or one Transaction that matches the filter.
     * @param {TransactionFindUniqueArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransactionFindUniqueArgs>(args: SelectSubset<T, TransactionFindUniqueArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransactionFindUniqueOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, TransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransactionFindFirstArgs>(args?: SelectSubset<T, TransactionFindFirstArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, TransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transactions
     * const transactions = await prisma.transaction.findMany()
     * 
     * // Get first 10 Transactions
     * const transactions = await prisma.transaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transactionWithIdOnly = await prisma.transaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransactionFindManyArgs>(args?: SelectSubset<T, TransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transaction.
     * @param {TransactionCreateArgs} args - Arguments to create a Transaction.
     * @example
     * // Create one Transaction
     * const Transaction = await prisma.transaction.create({
     *   data: {
     *     // ... data to create a Transaction
     *   }
     * })
     * 
     */
    create<T extends TransactionCreateArgs>(args: SelectSubset<T, TransactionCreateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transactions.
     * @param {TransactionCreateManyArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransactionCreateManyArgs>(args?: SelectSubset<T, TransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transactions and returns the data saved in the database.
     * @param {TransactionCreateManyAndReturnArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TransactionCreateManyAndReturnArgs>(args?: SelectSubset<T, TransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Transaction.
     * @param {TransactionDeleteArgs} args - Arguments to delete one Transaction.
     * @example
     * // Delete one Transaction
     * const Transaction = await prisma.transaction.delete({
     *   where: {
     *     // ... filter to delete one Transaction
     *   }
     * })
     * 
     */
    delete<T extends TransactionDeleteArgs>(args: SelectSubset<T, TransactionDeleteArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transaction.
     * @param {TransactionUpdateArgs} args - Arguments to update one Transaction.
     * @example
     * // Update one Transaction
     * const transaction = await prisma.transaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransactionUpdateArgs>(args: SelectSubset<T, TransactionUpdateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transactions.
     * @param {TransactionDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransactionDeleteManyArgs>(args?: SelectSubset<T, TransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransactionUpdateManyArgs>(args: SelectSubset<T, TransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions and returns the data updated in the database.
     * @param {TransactionUpdateManyAndReturnArgs} args - Arguments to update many Transactions.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TransactionUpdateManyAndReturnArgs>(args: SelectSubset<T, TransactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Transaction.
     * @param {TransactionUpsertArgs} args - Arguments to update or create a Transaction.
     * @example
     * // Update or create a Transaction
     * const transaction = await prisma.transaction.upsert({
     *   create: {
     *     // ... data to create a Transaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transaction we want to update
     *   }
     * })
     */
    upsert<T extends TransactionUpsertArgs>(args: SelectSubset<T, TransactionUpsertArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transaction.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
    **/
    count<T extends TransactionCountArgs>(
      args?: Subset<T, TransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TransactionAggregateArgs>(args: Subset<T, TransactionAggregateArgs>): Prisma.PrismaPromise<GetTransactionAggregateType<T>>

    /**
     * Group by Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransactionGroupByArgs['orderBy'] }
        : { orderBy?: TransactionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Transaction model
   */
  readonly fields: TransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    checkingsAccount<T extends CheckingsAccountDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CheckingsAccountDefaultArgs<ExtArgs>>): Prisma__CheckingsAccountClient<$Result.GetResult<Prisma.$CheckingsAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Transaction model
   */
  interface TransactionFieldRefs {
    readonly id: FieldRef<"Transaction", 'Int'>
    readonly amount: FieldRef<"Transaction", 'Float'>
    readonly date: FieldRef<"Transaction", 'DateTime'>
    readonly description: FieldRef<"Transaction", 'String'>
    readonly category: FieldRef<"Transaction", 'String'>
    readonly createdAt: FieldRef<"Transaction", 'DateTime'>
    readonly updatedAt: FieldRef<"Transaction", 'DateTime'>
    readonly checkingsAccountId: FieldRef<"Transaction", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Transaction findUnique
   */
  export type TransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findUniqueOrThrow
   */
  export type TransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findFirst
   */
  export type TransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findFirstOrThrow
   */
  export type TransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findMany
   */
  export type TransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction create
   */
  export type TransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a Transaction.
     */
    data: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
  }

  /**
   * Transaction createMany
   */
  export type TransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Transaction createManyAndReturn
   */
  export type TransactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transaction update
   */
  export type TransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a Transaction.
     */
    data: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
    /**
     * Choose, which Transaction to update.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction updateMany
   */
  export type TransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
  }

  /**
   * Transaction updateManyAndReturn
   */
  export type TransactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transaction upsert
   */
  export type TransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the Transaction to update in case it exists.
     */
    where: TransactionWhereUniqueInput
    /**
     * In case the Transaction found by the `where` argument doesn't exist, create a new Transaction with this data.
     */
    create: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
    /**
     * In case the Transaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
  }

  /**
   * Transaction delete
   */
  export type TransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter which Transaction to delete.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction deleteMany
   */
  export type TransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transactions to delete
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to delete.
     */
    limit?: number
  }

  /**
   * Transaction without action
   */
  export type TransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
  }


  /**
   * Model Payables
   */

  export type AggregatePayables = {
    _count: PayablesCountAggregateOutputType | null
    _avg: PayablesAvgAggregateOutputType | null
    _sum: PayablesSumAggregateOutputType | null
    _min: PayablesMinAggregateOutputType | null
    _max: PayablesMaxAggregateOutputType | null
  }

  export type PayablesAvgAggregateOutputType = {
    id: number | null
    total: number | null
    priority: number | null
  }

  export type PayablesSumAggregateOutputType = {
    id: number | null
    total: number | null
    priority: number | null
  }

  export type PayablesMinAggregateOutputType = {
    id: number | null
    userId: string | null
    title: string | null
    total: number | null
    priority: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PayablesMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    title: string | null
    total: number | null
    priority: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PayablesCountAggregateOutputType = {
    id: number
    userId: number
    title: number
    total: number
    priority: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PayablesAvgAggregateInputType = {
    id?: true
    total?: true
    priority?: true
  }

  export type PayablesSumAggregateInputType = {
    id?: true
    total?: true
    priority?: true
  }

  export type PayablesMinAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    total?: true
    priority?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PayablesMaxAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    total?: true
    priority?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PayablesCountAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    total?: true
    priority?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PayablesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payables to aggregate.
     */
    where?: PayablesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payables to fetch.
     */
    orderBy?: PayablesOrderByWithRelationInput | PayablesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PayablesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payables
    **/
    _count?: true | PayablesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PayablesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PayablesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PayablesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PayablesMaxAggregateInputType
  }

  export type GetPayablesAggregateType<T extends PayablesAggregateArgs> = {
        [P in keyof T & keyof AggregatePayables]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayables[P]>
      : GetScalarType<T[P], AggregatePayables[P]>
  }




  export type PayablesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PayablesWhereInput
    orderBy?: PayablesOrderByWithAggregationInput | PayablesOrderByWithAggregationInput[]
    by: PayablesScalarFieldEnum[] | PayablesScalarFieldEnum
    having?: PayablesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PayablesCountAggregateInputType | true
    _avg?: PayablesAvgAggregateInputType
    _sum?: PayablesSumAggregateInputType
    _min?: PayablesMinAggregateInputType
    _max?: PayablesMaxAggregateInputType
  }

  export type PayablesGroupByOutputType = {
    id: number
    userId: string
    title: string
    total: number
    priority: number
    createdAt: Date
    updatedAt: Date
    _count: PayablesCountAggregateOutputType | null
    _avg: PayablesAvgAggregateOutputType | null
    _sum: PayablesSumAggregateOutputType | null
    _min: PayablesMinAggregateOutputType | null
    _max: PayablesMaxAggregateOutputType | null
  }

  type GetPayablesGroupByPayload<T extends PayablesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PayablesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PayablesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PayablesGroupByOutputType[P]>
            : GetScalarType<T[P], PayablesGroupByOutputType[P]>
        }
      >
    >


  export type PayablesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    total?: boolean
    priority?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payables"]>

  export type PayablesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    total?: boolean
    priority?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payables"]>

  export type PayablesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    total?: boolean
    priority?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payables"]>

  export type PayablesSelectScalar = {
    id?: boolean
    userId?: boolean
    title?: boolean
    total?: boolean
    priority?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PayablesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "title" | "total" | "priority" | "createdAt" | "updatedAt", ExtArgs["result"]["payables"]>
  export type PayablesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PayablesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PayablesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PayablesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payables"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string
      title: string
      total: number
      priority: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["payables"]>
    composites: {}
  }

  type PayablesGetPayload<S extends boolean | null | undefined | PayablesDefaultArgs> = $Result.GetResult<Prisma.$PayablesPayload, S>

  type PayablesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PayablesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PayablesCountAggregateInputType | true
    }

  export interface PayablesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payables'], meta: { name: 'Payables' } }
    /**
     * Find zero or one Payables that matches the filter.
     * @param {PayablesFindUniqueArgs} args - Arguments to find a Payables
     * @example
     * // Get one Payables
     * const payables = await prisma.payables.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PayablesFindUniqueArgs>(args: SelectSubset<T, PayablesFindUniqueArgs<ExtArgs>>): Prisma__PayablesClient<$Result.GetResult<Prisma.$PayablesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payables that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PayablesFindUniqueOrThrowArgs} args - Arguments to find a Payables
     * @example
     * // Get one Payables
     * const payables = await prisma.payables.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PayablesFindUniqueOrThrowArgs>(args: SelectSubset<T, PayablesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PayablesClient<$Result.GetResult<Prisma.$PayablesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payables that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayablesFindFirstArgs} args - Arguments to find a Payables
     * @example
     * // Get one Payables
     * const payables = await prisma.payables.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PayablesFindFirstArgs>(args?: SelectSubset<T, PayablesFindFirstArgs<ExtArgs>>): Prisma__PayablesClient<$Result.GetResult<Prisma.$PayablesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payables that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayablesFindFirstOrThrowArgs} args - Arguments to find a Payables
     * @example
     * // Get one Payables
     * const payables = await prisma.payables.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PayablesFindFirstOrThrowArgs>(args?: SelectSubset<T, PayablesFindFirstOrThrowArgs<ExtArgs>>): Prisma__PayablesClient<$Result.GetResult<Prisma.$PayablesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payables that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayablesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payables
     * const payables = await prisma.payables.findMany()
     * 
     * // Get first 10 Payables
     * const payables = await prisma.payables.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const payablesWithIdOnly = await prisma.payables.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PayablesFindManyArgs>(args?: SelectSubset<T, PayablesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayablesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payables.
     * @param {PayablesCreateArgs} args - Arguments to create a Payables.
     * @example
     * // Create one Payables
     * const Payables = await prisma.payables.create({
     *   data: {
     *     // ... data to create a Payables
     *   }
     * })
     * 
     */
    create<T extends PayablesCreateArgs>(args: SelectSubset<T, PayablesCreateArgs<ExtArgs>>): Prisma__PayablesClient<$Result.GetResult<Prisma.$PayablesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payables.
     * @param {PayablesCreateManyArgs} args - Arguments to create many Payables.
     * @example
     * // Create many Payables
     * const payables = await prisma.payables.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PayablesCreateManyArgs>(args?: SelectSubset<T, PayablesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payables and returns the data saved in the database.
     * @param {PayablesCreateManyAndReturnArgs} args - Arguments to create many Payables.
     * @example
     * // Create many Payables
     * const payables = await prisma.payables.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payables and only return the `id`
     * const payablesWithIdOnly = await prisma.payables.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PayablesCreateManyAndReturnArgs>(args?: SelectSubset<T, PayablesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayablesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Payables.
     * @param {PayablesDeleteArgs} args - Arguments to delete one Payables.
     * @example
     * // Delete one Payables
     * const Payables = await prisma.payables.delete({
     *   where: {
     *     // ... filter to delete one Payables
     *   }
     * })
     * 
     */
    delete<T extends PayablesDeleteArgs>(args: SelectSubset<T, PayablesDeleteArgs<ExtArgs>>): Prisma__PayablesClient<$Result.GetResult<Prisma.$PayablesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payables.
     * @param {PayablesUpdateArgs} args - Arguments to update one Payables.
     * @example
     * // Update one Payables
     * const payables = await prisma.payables.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PayablesUpdateArgs>(args: SelectSubset<T, PayablesUpdateArgs<ExtArgs>>): Prisma__PayablesClient<$Result.GetResult<Prisma.$PayablesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payables.
     * @param {PayablesDeleteManyArgs} args - Arguments to filter Payables to delete.
     * @example
     * // Delete a few Payables
     * const { count } = await prisma.payables.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PayablesDeleteManyArgs>(args?: SelectSubset<T, PayablesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayablesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payables
     * const payables = await prisma.payables.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PayablesUpdateManyArgs>(args: SelectSubset<T, PayablesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payables and returns the data updated in the database.
     * @param {PayablesUpdateManyAndReturnArgs} args - Arguments to update many Payables.
     * @example
     * // Update many Payables
     * const payables = await prisma.payables.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Payables and only return the `id`
     * const payablesWithIdOnly = await prisma.payables.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PayablesUpdateManyAndReturnArgs>(args: SelectSubset<T, PayablesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayablesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Payables.
     * @param {PayablesUpsertArgs} args - Arguments to update or create a Payables.
     * @example
     * // Update or create a Payables
     * const payables = await prisma.payables.upsert({
     *   create: {
     *     // ... data to create a Payables
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payables we want to update
     *   }
     * })
     */
    upsert<T extends PayablesUpsertArgs>(args: SelectSubset<T, PayablesUpsertArgs<ExtArgs>>): Prisma__PayablesClient<$Result.GetResult<Prisma.$PayablesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayablesCountArgs} args - Arguments to filter Payables to count.
     * @example
     * // Count the number of Payables
     * const count = await prisma.payables.count({
     *   where: {
     *     // ... the filter for the Payables we want to count
     *   }
     * })
    **/
    count<T extends PayablesCountArgs>(
      args?: Subset<T, PayablesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PayablesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayablesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PayablesAggregateArgs>(args: Subset<T, PayablesAggregateArgs>): Prisma.PrismaPromise<GetPayablesAggregateType<T>>

    /**
     * Group by Payables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayablesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PayablesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PayablesGroupByArgs['orderBy'] }
        : { orderBy?: PayablesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PayablesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPayablesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payables model
   */
  readonly fields: PayablesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payables.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PayablesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Payables model
   */
  interface PayablesFieldRefs {
    readonly id: FieldRef<"Payables", 'Int'>
    readonly userId: FieldRef<"Payables", 'String'>
    readonly title: FieldRef<"Payables", 'String'>
    readonly total: FieldRef<"Payables", 'Int'>
    readonly priority: FieldRef<"Payables", 'Int'>
    readonly createdAt: FieldRef<"Payables", 'DateTime'>
    readonly updatedAt: FieldRef<"Payables", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Payables findUnique
   */
  export type PayablesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payables
     */
    select?: PayablesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payables
     */
    omit?: PayablesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayablesInclude<ExtArgs> | null
    /**
     * Filter, which Payables to fetch.
     */
    where: PayablesWhereUniqueInput
  }

  /**
   * Payables findUniqueOrThrow
   */
  export type PayablesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payables
     */
    select?: PayablesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payables
     */
    omit?: PayablesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayablesInclude<ExtArgs> | null
    /**
     * Filter, which Payables to fetch.
     */
    where: PayablesWhereUniqueInput
  }

  /**
   * Payables findFirst
   */
  export type PayablesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payables
     */
    select?: PayablesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payables
     */
    omit?: PayablesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayablesInclude<ExtArgs> | null
    /**
     * Filter, which Payables to fetch.
     */
    where?: PayablesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payables to fetch.
     */
    orderBy?: PayablesOrderByWithRelationInput | PayablesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payables.
     */
    cursor?: PayablesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payables.
     */
    distinct?: PayablesScalarFieldEnum | PayablesScalarFieldEnum[]
  }

  /**
   * Payables findFirstOrThrow
   */
  export type PayablesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payables
     */
    select?: PayablesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payables
     */
    omit?: PayablesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayablesInclude<ExtArgs> | null
    /**
     * Filter, which Payables to fetch.
     */
    where?: PayablesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payables to fetch.
     */
    orderBy?: PayablesOrderByWithRelationInput | PayablesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payables.
     */
    cursor?: PayablesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payables.
     */
    distinct?: PayablesScalarFieldEnum | PayablesScalarFieldEnum[]
  }

  /**
   * Payables findMany
   */
  export type PayablesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payables
     */
    select?: PayablesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payables
     */
    omit?: PayablesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayablesInclude<ExtArgs> | null
    /**
     * Filter, which Payables to fetch.
     */
    where?: PayablesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payables to fetch.
     */
    orderBy?: PayablesOrderByWithRelationInput | PayablesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payables.
     */
    cursor?: PayablesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payables.
     */
    skip?: number
    distinct?: PayablesScalarFieldEnum | PayablesScalarFieldEnum[]
  }

  /**
   * Payables create
   */
  export type PayablesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payables
     */
    select?: PayablesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payables
     */
    omit?: PayablesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayablesInclude<ExtArgs> | null
    /**
     * The data needed to create a Payables.
     */
    data: XOR<PayablesCreateInput, PayablesUncheckedCreateInput>
  }

  /**
   * Payables createMany
   */
  export type PayablesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payables.
     */
    data: PayablesCreateManyInput | PayablesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payables createManyAndReturn
   */
  export type PayablesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payables
     */
    select?: PayablesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payables
     */
    omit?: PayablesOmit<ExtArgs> | null
    /**
     * The data used to create many Payables.
     */
    data: PayablesCreateManyInput | PayablesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayablesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payables update
   */
  export type PayablesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payables
     */
    select?: PayablesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payables
     */
    omit?: PayablesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayablesInclude<ExtArgs> | null
    /**
     * The data needed to update a Payables.
     */
    data: XOR<PayablesUpdateInput, PayablesUncheckedUpdateInput>
    /**
     * Choose, which Payables to update.
     */
    where: PayablesWhereUniqueInput
  }

  /**
   * Payables updateMany
   */
  export type PayablesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payables.
     */
    data: XOR<PayablesUpdateManyMutationInput, PayablesUncheckedUpdateManyInput>
    /**
     * Filter which Payables to update
     */
    where?: PayablesWhereInput
    /**
     * Limit how many Payables to update.
     */
    limit?: number
  }

  /**
   * Payables updateManyAndReturn
   */
  export type PayablesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payables
     */
    select?: PayablesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payables
     */
    omit?: PayablesOmit<ExtArgs> | null
    /**
     * The data used to update Payables.
     */
    data: XOR<PayablesUpdateManyMutationInput, PayablesUncheckedUpdateManyInput>
    /**
     * Filter which Payables to update
     */
    where?: PayablesWhereInput
    /**
     * Limit how many Payables to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayablesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payables upsert
   */
  export type PayablesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payables
     */
    select?: PayablesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payables
     */
    omit?: PayablesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayablesInclude<ExtArgs> | null
    /**
     * The filter to search for the Payables to update in case it exists.
     */
    where: PayablesWhereUniqueInput
    /**
     * In case the Payables found by the `where` argument doesn't exist, create a new Payables with this data.
     */
    create: XOR<PayablesCreateInput, PayablesUncheckedCreateInput>
    /**
     * In case the Payables was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PayablesUpdateInput, PayablesUncheckedUpdateInput>
  }

  /**
   * Payables delete
   */
  export type PayablesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payables
     */
    select?: PayablesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payables
     */
    omit?: PayablesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayablesInclude<ExtArgs> | null
    /**
     * Filter which Payables to delete.
     */
    where: PayablesWhereUniqueInput
  }

  /**
   * Payables deleteMany
   */
  export type PayablesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payables to delete
     */
    where?: PayablesWhereInput
    /**
     * Limit how many Payables to delete.
     */
    limit?: number
  }

  /**
   * Payables without action
   */
  export type PayablesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payables
     */
    select?: PayablesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payables
     */
    omit?: PayablesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayablesInclude<ExtArgs> | null
  }


  /**
   * Model SupportMessages
   */

  export type AggregateSupportMessages = {
    _count: SupportMessagesCountAggregateOutputType | null
    _avg: SupportMessagesAvgAggregateOutputType | null
    _sum: SupportMessagesSumAggregateOutputType | null
    _min: SupportMessagesMinAggregateOutputType | null
    _max: SupportMessagesMaxAggregateOutputType | null
  }

  export type SupportMessagesAvgAggregateOutputType = {
    id: number | null
  }

  export type SupportMessagesSumAggregateOutputType = {
    id: number | null
  }

  export type SupportMessagesMinAggregateOutputType = {
    id: number | null
    userId: string | null
    message: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SupportMessagesMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    message: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SupportMessagesCountAggregateOutputType = {
    id: number
    userId: number
    message: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SupportMessagesAvgAggregateInputType = {
    id?: true
  }

  export type SupportMessagesSumAggregateInputType = {
    id?: true
  }

  export type SupportMessagesMinAggregateInputType = {
    id?: true
    userId?: true
    message?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SupportMessagesMaxAggregateInputType = {
    id?: true
    userId?: true
    message?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SupportMessagesCountAggregateInputType = {
    id?: true
    userId?: true
    message?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SupportMessagesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SupportMessages to aggregate.
     */
    where?: SupportMessagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupportMessages to fetch.
     */
    orderBy?: SupportMessagesOrderByWithRelationInput | SupportMessagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SupportMessagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupportMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupportMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SupportMessages
    **/
    _count?: true | SupportMessagesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SupportMessagesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SupportMessagesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SupportMessagesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SupportMessagesMaxAggregateInputType
  }

  export type GetSupportMessagesAggregateType<T extends SupportMessagesAggregateArgs> = {
        [P in keyof T & keyof AggregateSupportMessages]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSupportMessages[P]>
      : GetScalarType<T[P], AggregateSupportMessages[P]>
  }




  export type SupportMessagesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SupportMessagesWhereInput
    orderBy?: SupportMessagesOrderByWithAggregationInput | SupportMessagesOrderByWithAggregationInput[]
    by: SupportMessagesScalarFieldEnum[] | SupportMessagesScalarFieldEnum
    having?: SupportMessagesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SupportMessagesCountAggregateInputType | true
    _avg?: SupportMessagesAvgAggregateInputType
    _sum?: SupportMessagesSumAggregateInputType
    _min?: SupportMessagesMinAggregateInputType
    _max?: SupportMessagesMaxAggregateInputType
  }

  export type SupportMessagesGroupByOutputType = {
    id: number
    userId: string
    message: string
    createdAt: Date
    updatedAt: Date
    _count: SupportMessagesCountAggregateOutputType | null
    _avg: SupportMessagesAvgAggregateOutputType | null
    _sum: SupportMessagesSumAggregateOutputType | null
    _min: SupportMessagesMinAggregateOutputType | null
    _max: SupportMessagesMaxAggregateOutputType | null
  }

  type GetSupportMessagesGroupByPayload<T extends SupportMessagesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SupportMessagesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SupportMessagesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SupportMessagesGroupByOutputType[P]>
            : GetScalarType<T[P], SupportMessagesGroupByOutputType[P]>
        }
      >
    >


  export type SupportMessagesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    message?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["supportMessages"]>

  export type SupportMessagesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    message?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["supportMessages"]>

  export type SupportMessagesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    message?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["supportMessages"]>

  export type SupportMessagesSelectScalar = {
    id?: boolean
    userId?: boolean
    message?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SupportMessagesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "message" | "createdAt" | "updatedAt", ExtArgs["result"]["supportMessages"]>
  export type SupportMessagesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SupportMessagesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SupportMessagesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SupportMessagesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SupportMessages"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string
      message: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["supportMessages"]>
    composites: {}
  }

  type SupportMessagesGetPayload<S extends boolean | null | undefined | SupportMessagesDefaultArgs> = $Result.GetResult<Prisma.$SupportMessagesPayload, S>

  type SupportMessagesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SupportMessagesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SupportMessagesCountAggregateInputType | true
    }

  export interface SupportMessagesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SupportMessages'], meta: { name: 'SupportMessages' } }
    /**
     * Find zero or one SupportMessages that matches the filter.
     * @param {SupportMessagesFindUniqueArgs} args - Arguments to find a SupportMessages
     * @example
     * // Get one SupportMessages
     * const supportMessages = await prisma.supportMessages.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SupportMessagesFindUniqueArgs>(args: SelectSubset<T, SupportMessagesFindUniqueArgs<ExtArgs>>): Prisma__SupportMessagesClient<$Result.GetResult<Prisma.$SupportMessagesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SupportMessages that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SupportMessagesFindUniqueOrThrowArgs} args - Arguments to find a SupportMessages
     * @example
     * // Get one SupportMessages
     * const supportMessages = await prisma.supportMessages.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SupportMessagesFindUniqueOrThrowArgs>(args: SelectSubset<T, SupportMessagesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SupportMessagesClient<$Result.GetResult<Prisma.$SupportMessagesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SupportMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupportMessagesFindFirstArgs} args - Arguments to find a SupportMessages
     * @example
     * // Get one SupportMessages
     * const supportMessages = await prisma.supportMessages.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SupportMessagesFindFirstArgs>(args?: SelectSubset<T, SupportMessagesFindFirstArgs<ExtArgs>>): Prisma__SupportMessagesClient<$Result.GetResult<Prisma.$SupportMessagesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SupportMessages that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupportMessagesFindFirstOrThrowArgs} args - Arguments to find a SupportMessages
     * @example
     * // Get one SupportMessages
     * const supportMessages = await prisma.supportMessages.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SupportMessagesFindFirstOrThrowArgs>(args?: SelectSubset<T, SupportMessagesFindFirstOrThrowArgs<ExtArgs>>): Prisma__SupportMessagesClient<$Result.GetResult<Prisma.$SupportMessagesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SupportMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupportMessagesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SupportMessages
     * const supportMessages = await prisma.supportMessages.findMany()
     * 
     * // Get first 10 SupportMessages
     * const supportMessages = await prisma.supportMessages.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const supportMessagesWithIdOnly = await prisma.supportMessages.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SupportMessagesFindManyArgs>(args?: SelectSubset<T, SupportMessagesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupportMessagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SupportMessages.
     * @param {SupportMessagesCreateArgs} args - Arguments to create a SupportMessages.
     * @example
     * // Create one SupportMessages
     * const SupportMessages = await prisma.supportMessages.create({
     *   data: {
     *     // ... data to create a SupportMessages
     *   }
     * })
     * 
     */
    create<T extends SupportMessagesCreateArgs>(args: SelectSubset<T, SupportMessagesCreateArgs<ExtArgs>>): Prisma__SupportMessagesClient<$Result.GetResult<Prisma.$SupportMessagesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SupportMessages.
     * @param {SupportMessagesCreateManyArgs} args - Arguments to create many SupportMessages.
     * @example
     * // Create many SupportMessages
     * const supportMessages = await prisma.supportMessages.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SupportMessagesCreateManyArgs>(args?: SelectSubset<T, SupportMessagesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SupportMessages and returns the data saved in the database.
     * @param {SupportMessagesCreateManyAndReturnArgs} args - Arguments to create many SupportMessages.
     * @example
     * // Create many SupportMessages
     * const supportMessages = await prisma.supportMessages.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SupportMessages and only return the `id`
     * const supportMessagesWithIdOnly = await prisma.supportMessages.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SupportMessagesCreateManyAndReturnArgs>(args?: SelectSubset<T, SupportMessagesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupportMessagesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SupportMessages.
     * @param {SupportMessagesDeleteArgs} args - Arguments to delete one SupportMessages.
     * @example
     * // Delete one SupportMessages
     * const SupportMessages = await prisma.supportMessages.delete({
     *   where: {
     *     // ... filter to delete one SupportMessages
     *   }
     * })
     * 
     */
    delete<T extends SupportMessagesDeleteArgs>(args: SelectSubset<T, SupportMessagesDeleteArgs<ExtArgs>>): Prisma__SupportMessagesClient<$Result.GetResult<Prisma.$SupportMessagesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SupportMessages.
     * @param {SupportMessagesUpdateArgs} args - Arguments to update one SupportMessages.
     * @example
     * // Update one SupportMessages
     * const supportMessages = await prisma.supportMessages.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SupportMessagesUpdateArgs>(args: SelectSubset<T, SupportMessagesUpdateArgs<ExtArgs>>): Prisma__SupportMessagesClient<$Result.GetResult<Prisma.$SupportMessagesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SupportMessages.
     * @param {SupportMessagesDeleteManyArgs} args - Arguments to filter SupportMessages to delete.
     * @example
     * // Delete a few SupportMessages
     * const { count } = await prisma.supportMessages.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SupportMessagesDeleteManyArgs>(args?: SelectSubset<T, SupportMessagesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SupportMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupportMessagesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SupportMessages
     * const supportMessages = await prisma.supportMessages.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SupportMessagesUpdateManyArgs>(args: SelectSubset<T, SupportMessagesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SupportMessages and returns the data updated in the database.
     * @param {SupportMessagesUpdateManyAndReturnArgs} args - Arguments to update many SupportMessages.
     * @example
     * // Update many SupportMessages
     * const supportMessages = await prisma.supportMessages.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SupportMessages and only return the `id`
     * const supportMessagesWithIdOnly = await prisma.supportMessages.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SupportMessagesUpdateManyAndReturnArgs>(args: SelectSubset<T, SupportMessagesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupportMessagesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SupportMessages.
     * @param {SupportMessagesUpsertArgs} args - Arguments to update or create a SupportMessages.
     * @example
     * // Update or create a SupportMessages
     * const supportMessages = await prisma.supportMessages.upsert({
     *   create: {
     *     // ... data to create a SupportMessages
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SupportMessages we want to update
     *   }
     * })
     */
    upsert<T extends SupportMessagesUpsertArgs>(args: SelectSubset<T, SupportMessagesUpsertArgs<ExtArgs>>): Prisma__SupportMessagesClient<$Result.GetResult<Prisma.$SupportMessagesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SupportMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupportMessagesCountArgs} args - Arguments to filter SupportMessages to count.
     * @example
     * // Count the number of SupportMessages
     * const count = await prisma.supportMessages.count({
     *   where: {
     *     // ... the filter for the SupportMessages we want to count
     *   }
     * })
    **/
    count<T extends SupportMessagesCountArgs>(
      args?: Subset<T, SupportMessagesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SupportMessagesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SupportMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupportMessagesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SupportMessagesAggregateArgs>(args: Subset<T, SupportMessagesAggregateArgs>): Prisma.PrismaPromise<GetSupportMessagesAggregateType<T>>

    /**
     * Group by SupportMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupportMessagesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SupportMessagesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SupportMessagesGroupByArgs['orderBy'] }
        : { orderBy?: SupportMessagesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SupportMessagesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSupportMessagesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SupportMessages model
   */
  readonly fields: SupportMessagesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SupportMessages.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SupportMessagesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SupportMessages model
   */
  interface SupportMessagesFieldRefs {
    readonly id: FieldRef<"SupportMessages", 'Int'>
    readonly userId: FieldRef<"SupportMessages", 'String'>
    readonly message: FieldRef<"SupportMessages", 'String'>
    readonly createdAt: FieldRef<"SupportMessages", 'DateTime'>
    readonly updatedAt: FieldRef<"SupportMessages", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SupportMessages findUnique
   */
  export type SupportMessagesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportMessages
     */
    select?: SupportMessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupportMessages
     */
    omit?: SupportMessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportMessagesInclude<ExtArgs> | null
    /**
     * Filter, which SupportMessages to fetch.
     */
    where: SupportMessagesWhereUniqueInput
  }

  /**
   * SupportMessages findUniqueOrThrow
   */
  export type SupportMessagesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportMessages
     */
    select?: SupportMessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupportMessages
     */
    omit?: SupportMessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportMessagesInclude<ExtArgs> | null
    /**
     * Filter, which SupportMessages to fetch.
     */
    where: SupportMessagesWhereUniqueInput
  }

  /**
   * SupportMessages findFirst
   */
  export type SupportMessagesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportMessages
     */
    select?: SupportMessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupportMessages
     */
    omit?: SupportMessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportMessagesInclude<ExtArgs> | null
    /**
     * Filter, which SupportMessages to fetch.
     */
    where?: SupportMessagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupportMessages to fetch.
     */
    orderBy?: SupportMessagesOrderByWithRelationInput | SupportMessagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SupportMessages.
     */
    cursor?: SupportMessagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupportMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupportMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SupportMessages.
     */
    distinct?: SupportMessagesScalarFieldEnum | SupportMessagesScalarFieldEnum[]
  }

  /**
   * SupportMessages findFirstOrThrow
   */
  export type SupportMessagesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportMessages
     */
    select?: SupportMessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupportMessages
     */
    omit?: SupportMessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportMessagesInclude<ExtArgs> | null
    /**
     * Filter, which SupportMessages to fetch.
     */
    where?: SupportMessagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupportMessages to fetch.
     */
    orderBy?: SupportMessagesOrderByWithRelationInput | SupportMessagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SupportMessages.
     */
    cursor?: SupportMessagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupportMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupportMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SupportMessages.
     */
    distinct?: SupportMessagesScalarFieldEnum | SupportMessagesScalarFieldEnum[]
  }

  /**
   * SupportMessages findMany
   */
  export type SupportMessagesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportMessages
     */
    select?: SupportMessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupportMessages
     */
    omit?: SupportMessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportMessagesInclude<ExtArgs> | null
    /**
     * Filter, which SupportMessages to fetch.
     */
    where?: SupportMessagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupportMessages to fetch.
     */
    orderBy?: SupportMessagesOrderByWithRelationInput | SupportMessagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SupportMessages.
     */
    cursor?: SupportMessagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupportMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupportMessages.
     */
    skip?: number
    distinct?: SupportMessagesScalarFieldEnum | SupportMessagesScalarFieldEnum[]
  }

  /**
   * SupportMessages create
   */
  export type SupportMessagesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportMessages
     */
    select?: SupportMessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupportMessages
     */
    omit?: SupportMessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportMessagesInclude<ExtArgs> | null
    /**
     * The data needed to create a SupportMessages.
     */
    data: XOR<SupportMessagesCreateInput, SupportMessagesUncheckedCreateInput>
  }

  /**
   * SupportMessages createMany
   */
  export type SupportMessagesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SupportMessages.
     */
    data: SupportMessagesCreateManyInput | SupportMessagesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SupportMessages createManyAndReturn
   */
  export type SupportMessagesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportMessages
     */
    select?: SupportMessagesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SupportMessages
     */
    omit?: SupportMessagesOmit<ExtArgs> | null
    /**
     * The data used to create many SupportMessages.
     */
    data: SupportMessagesCreateManyInput | SupportMessagesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportMessagesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SupportMessages update
   */
  export type SupportMessagesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportMessages
     */
    select?: SupportMessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupportMessages
     */
    omit?: SupportMessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportMessagesInclude<ExtArgs> | null
    /**
     * The data needed to update a SupportMessages.
     */
    data: XOR<SupportMessagesUpdateInput, SupportMessagesUncheckedUpdateInput>
    /**
     * Choose, which SupportMessages to update.
     */
    where: SupportMessagesWhereUniqueInput
  }

  /**
   * SupportMessages updateMany
   */
  export type SupportMessagesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SupportMessages.
     */
    data: XOR<SupportMessagesUpdateManyMutationInput, SupportMessagesUncheckedUpdateManyInput>
    /**
     * Filter which SupportMessages to update
     */
    where?: SupportMessagesWhereInput
    /**
     * Limit how many SupportMessages to update.
     */
    limit?: number
  }

  /**
   * SupportMessages updateManyAndReturn
   */
  export type SupportMessagesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportMessages
     */
    select?: SupportMessagesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SupportMessages
     */
    omit?: SupportMessagesOmit<ExtArgs> | null
    /**
     * The data used to update SupportMessages.
     */
    data: XOR<SupportMessagesUpdateManyMutationInput, SupportMessagesUncheckedUpdateManyInput>
    /**
     * Filter which SupportMessages to update
     */
    where?: SupportMessagesWhereInput
    /**
     * Limit how many SupportMessages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportMessagesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SupportMessages upsert
   */
  export type SupportMessagesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportMessages
     */
    select?: SupportMessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupportMessages
     */
    omit?: SupportMessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportMessagesInclude<ExtArgs> | null
    /**
     * The filter to search for the SupportMessages to update in case it exists.
     */
    where: SupportMessagesWhereUniqueInput
    /**
     * In case the SupportMessages found by the `where` argument doesn't exist, create a new SupportMessages with this data.
     */
    create: XOR<SupportMessagesCreateInput, SupportMessagesUncheckedCreateInput>
    /**
     * In case the SupportMessages was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SupportMessagesUpdateInput, SupportMessagesUncheckedUpdateInput>
  }

  /**
   * SupportMessages delete
   */
  export type SupportMessagesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportMessages
     */
    select?: SupportMessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupportMessages
     */
    omit?: SupportMessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportMessagesInclude<ExtArgs> | null
    /**
     * Filter which SupportMessages to delete.
     */
    where: SupportMessagesWhereUniqueInput
  }

  /**
   * SupportMessages deleteMany
   */
  export type SupportMessagesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SupportMessages to delete
     */
    where?: SupportMessagesWhereInput
    /**
     * Limit how many SupportMessages to delete.
     */
    limit?: number
  }

  /**
   * SupportMessages without action
   */
  export type SupportMessagesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportMessages
     */
    select?: SupportMessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupportMessages
     */
    omit?: SupportMessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportMessagesInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    cnic: 'cnic',
    phone: 'phone',
    password: 'password',
    role: 'role',
    otp: 'otp',
    resetToken: 'resetToken',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    sid: 'sid',
    data: 'data',
    expiresAt: 'expiresAt'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const BankScalarFieldEnum: {
    id: 'id',
    name: 'name',
    logo: 'logo',
    shortDescription: 'shortDescription',
    email: 'email',
    phone: 'phone'
  };

  export type BankScalarFieldEnum = (typeof BankScalarFieldEnum)[keyof typeof BankScalarFieldEnum]


  export const UserBankScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    bankId: 'bankId',
    accountNumber: 'accountNumber',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserBankScalarFieldEnum = (typeof UserBankScalarFieldEnum)[keyof typeof UserBankScalarFieldEnum]


  export const InvestmentAccountScalarFieldEnum: {
    id: 'id',
    userBankId: 'userBankId',
    portfolio: 'portfolio',
    profitLoss: 'profitLoss',
    cashBalance: 'cashBalance',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type InvestmentAccountScalarFieldEnum = (typeof InvestmentAccountScalarFieldEnum)[keyof typeof InvestmentAccountScalarFieldEnum]


  export const SavingsAccountScalarFieldEnum: {
    id: 'id',
    userBankId: 'userBankId',
    balance: 'balance',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SavingsAccountScalarFieldEnum = (typeof SavingsAccountScalarFieldEnum)[keyof typeof SavingsAccountScalarFieldEnum]


  export const CheckingsAccountScalarFieldEnum: {
    id: 'id',
    userBankId: 'userBankId',
    balance: 'balance',
    prevMonthsTransactionsSummary: 'prevMonthsTransactionsSummary',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CheckingsAccountScalarFieldEnum = (typeof CheckingsAccountScalarFieldEnum)[keyof typeof CheckingsAccountScalarFieldEnum]


  export const TransactionScalarFieldEnum: {
    id: 'id',
    amount: 'amount',
    date: 'date',
    description: 'description',
    category: 'category',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    checkingsAccountId: 'checkingsAccountId'
  };

  export type TransactionScalarFieldEnum = (typeof TransactionScalarFieldEnum)[keyof typeof TransactionScalarFieldEnum]


  export const PayablesScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    title: 'title',
    total: 'total',
    priority: 'priority',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PayablesScalarFieldEnum = (typeof PayablesScalarFieldEnum)[keyof typeof PayablesScalarFieldEnum]


  export const SupportMessagesScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    message: 'message',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SupportMessagesScalarFieldEnum = (typeof SupportMessagesScalarFieldEnum)[keyof typeof SupportMessagesScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    cnic?: StringFilter<"User"> | string
    phone?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    otp?: StringNullableFilter<"User"> | string | null
    resetToken?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    userBanks?: UserBankListRelationFilter
    Payables?: PayablesListRelationFilter
    SupportMessages?: SupportMessagesListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    cnic?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    role?: SortOrder
    otp?: SortOrderInput | SortOrder
    resetToken?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userBanks?: UserBankOrderByRelationAggregateInput
    Payables?: PayablesOrderByRelationAggregateInput
    SupportMessages?: SupportMessagesOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    cnic?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    phone?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    otp?: StringNullableFilter<"User"> | string | null
    resetToken?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    userBanks?: UserBankListRelationFilter
    Payables?: PayablesListRelationFilter
    SupportMessages?: SupportMessagesListRelationFilter
  }, "id" | "email" | "cnic">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    cnic?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    role?: SortOrder
    otp?: SortOrderInput | SortOrder
    resetToken?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    cnic?: StringWithAggregatesFilter<"User"> | string
    phone?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    otp?: StringNullableWithAggregatesFilter<"User"> | string | null
    resetToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    sid?: StringFilter<"Session"> | string
    data?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    sid?: SortOrder
    data?: SortOrder
    expiresAt?: SortOrder
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sid?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    data?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
  }, "id" | "sid">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    sid?: SortOrder
    data?: SortOrder
    expiresAt?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    sid?: StringWithAggregatesFilter<"Session"> | string
    data?: StringWithAggregatesFilter<"Session"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type BankWhereInput = {
    AND?: BankWhereInput | BankWhereInput[]
    OR?: BankWhereInput[]
    NOT?: BankWhereInput | BankWhereInput[]
    id?: IntFilter<"Bank"> | number
    name?: StringFilter<"Bank"> | string
    logo?: StringFilter<"Bank"> | string
    shortDescription?: StringFilter<"Bank"> | string
    email?: StringFilter<"Bank"> | string
    phone?: StringFilter<"Bank"> | string
    userBanks?: UserBankListRelationFilter
  }

  export type BankOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    logo?: SortOrder
    shortDescription?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    userBanks?: UserBankOrderByRelationAggregateInput
  }

  export type BankWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BankWhereInput | BankWhereInput[]
    OR?: BankWhereInput[]
    NOT?: BankWhereInput | BankWhereInput[]
    name?: StringFilter<"Bank"> | string
    logo?: StringFilter<"Bank"> | string
    shortDescription?: StringFilter<"Bank"> | string
    email?: StringFilter<"Bank"> | string
    phone?: StringFilter<"Bank"> | string
    userBanks?: UserBankListRelationFilter
  }, "id">

  export type BankOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    logo?: SortOrder
    shortDescription?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    _count?: BankCountOrderByAggregateInput
    _avg?: BankAvgOrderByAggregateInput
    _max?: BankMaxOrderByAggregateInput
    _min?: BankMinOrderByAggregateInput
    _sum?: BankSumOrderByAggregateInput
  }

  export type BankScalarWhereWithAggregatesInput = {
    AND?: BankScalarWhereWithAggregatesInput | BankScalarWhereWithAggregatesInput[]
    OR?: BankScalarWhereWithAggregatesInput[]
    NOT?: BankScalarWhereWithAggregatesInput | BankScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Bank"> | number
    name?: StringWithAggregatesFilter<"Bank"> | string
    logo?: StringWithAggregatesFilter<"Bank"> | string
    shortDescription?: StringWithAggregatesFilter<"Bank"> | string
    email?: StringWithAggregatesFilter<"Bank"> | string
    phone?: StringWithAggregatesFilter<"Bank"> | string
  }

  export type UserBankWhereInput = {
    AND?: UserBankWhereInput | UserBankWhereInput[]
    OR?: UserBankWhereInput[]
    NOT?: UserBankWhereInput | UserBankWhereInput[]
    id?: IntFilter<"UserBank"> | number
    userId?: StringFilter<"UserBank"> | string
    bankId?: IntFilter<"UserBank"> | number
    accountNumber?: StringFilter<"UserBank"> | string
    createdAt?: DateTimeFilter<"UserBank"> | Date | string
    updatedAt?: DateTimeFilter<"UserBank"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    bank?: XOR<BankScalarRelationFilter, BankWhereInput>
    savingsAccount?: XOR<SavingsAccountNullableScalarRelationFilter, SavingsAccountWhereInput> | null
    checkingsAccount?: XOR<CheckingsAccountNullableScalarRelationFilter, CheckingsAccountWhereInput> | null
    investmentAccount?: XOR<InvestmentAccountNullableScalarRelationFilter, InvestmentAccountWhereInput> | null
  }

  export type UserBankOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    bankId?: SortOrder
    accountNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    bank?: BankOrderByWithRelationInput
    savingsAccount?: SavingsAccountOrderByWithRelationInput
    checkingsAccount?: CheckingsAccountOrderByWithRelationInput
    investmentAccount?: InvestmentAccountOrderByWithRelationInput
  }

  export type UserBankWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId_bankId?: UserBankUserIdBankIdCompoundUniqueInput
    AND?: UserBankWhereInput | UserBankWhereInput[]
    OR?: UserBankWhereInput[]
    NOT?: UserBankWhereInput | UserBankWhereInput[]
    userId?: StringFilter<"UserBank"> | string
    bankId?: IntFilter<"UserBank"> | number
    accountNumber?: StringFilter<"UserBank"> | string
    createdAt?: DateTimeFilter<"UserBank"> | Date | string
    updatedAt?: DateTimeFilter<"UserBank"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    bank?: XOR<BankScalarRelationFilter, BankWhereInput>
    savingsAccount?: XOR<SavingsAccountNullableScalarRelationFilter, SavingsAccountWhereInput> | null
    checkingsAccount?: XOR<CheckingsAccountNullableScalarRelationFilter, CheckingsAccountWhereInput> | null
    investmentAccount?: XOR<InvestmentAccountNullableScalarRelationFilter, InvestmentAccountWhereInput> | null
  }, "id" | "userId_bankId">

  export type UserBankOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    bankId?: SortOrder
    accountNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserBankCountOrderByAggregateInput
    _avg?: UserBankAvgOrderByAggregateInput
    _max?: UserBankMaxOrderByAggregateInput
    _min?: UserBankMinOrderByAggregateInput
    _sum?: UserBankSumOrderByAggregateInput
  }

  export type UserBankScalarWhereWithAggregatesInput = {
    AND?: UserBankScalarWhereWithAggregatesInput | UserBankScalarWhereWithAggregatesInput[]
    OR?: UserBankScalarWhereWithAggregatesInput[]
    NOT?: UserBankScalarWhereWithAggregatesInput | UserBankScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserBank"> | number
    userId?: StringWithAggregatesFilter<"UserBank"> | string
    bankId?: IntWithAggregatesFilter<"UserBank"> | number
    accountNumber?: StringWithAggregatesFilter<"UserBank"> | string
    createdAt?: DateTimeWithAggregatesFilter<"UserBank"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserBank"> | Date | string
  }

  export type InvestmentAccountWhereInput = {
    AND?: InvestmentAccountWhereInput | InvestmentAccountWhereInput[]
    OR?: InvestmentAccountWhereInput[]
    NOT?: InvestmentAccountWhereInput | InvestmentAccountWhereInput[]
    id?: IntFilter<"InvestmentAccount"> | number
    userBankId?: IntFilter<"InvestmentAccount"> | number
    portfolio?: FloatFilter<"InvestmentAccount"> | number
    profitLoss?: FloatFilter<"InvestmentAccount"> | number
    cashBalance?: FloatFilter<"InvestmentAccount"> | number
    createdAt?: DateTimeFilter<"InvestmentAccount"> | Date | string
    updatedAt?: DateTimeFilter<"InvestmentAccount"> | Date | string
    userBank?: XOR<UserBankNullableScalarRelationFilter, UserBankWhereInput> | null
  }

  export type InvestmentAccountOrderByWithRelationInput = {
    id?: SortOrder
    userBankId?: SortOrder
    portfolio?: SortOrder
    profitLoss?: SortOrder
    cashBalance?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userBank?: UserBankOrderByWithRelationInput
  }

  export type InvestmentAccountWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userBankId?: number
    AND?: InvestmentAccountWhereInput | InvestmentAccountWhereInput[]
    OR?: InvestmentAccountWhereInput[]
    NOT?: InvestmentAccountWhereInput | InvestmentAccountWhereInput[]
    portfolio?: FloatFilter<"InvestmentAccount"> | number
    profitLoss?: FloatFilter<"InvestmentAccount"> | number
    cashBalance?: FloatFilter<"InvestmentAccount"> | number
    createdAt?: DateTimeFilter<"InvestmentAccount"> | Date | string
    updatedAt?: DateTimeFilter<"InvestmentAccount"> | Date | string
    userBank?: XOR<UserBankNullableScalarRelationFilter, UserBankWhereInput> | null
  }, "id" | "userBankId">

  export type InvestmentAccountOrderByWithAggregationInput = {
    id?: SortOrder
    userBankId?: SortOrder
    portfolio?: SortOrder
    profitLoss?: SortOrder
    cashBalance?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: InvestmentAccountCountOrderByAggregateInput
    _avg?: InvestmentAccountAvgOrderByAggregateInput
    _max?: InvestmentAccountMaxOrderByAggregateInput
    _min?: InvestmentAccountMinOrderByAggregateInput
    _sum?: InvestmentAccountSumOrderByAggregateInput
  }

  export type InvestmentAccountScalarWhereWithAggregatesInput = {
    AND?: InvestmentAccountScalarWhereWithAggregatesInput | InvestmentAccountScalarWhereWithAggregatesInput[]
    OR?: InvestmentAccountScalarWhereWithAggregatesInput[]
    NOT?: InvestmentAccountScalarWhereWithAggregatesInput | InvestmentAccountScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"InvestmentAccount"> | number
    userBankId?: IntWithAggregatesFilter<"InvestmentAccount"> | number
    portfolio?: FloatWithAggregatesFilter<"InvestmentAccount"> | number
    profitLoss?: FloatWithAggregatesFilter<"InvestmentAccount"> | number
    cashBalance?: FloatWithAggregatesFilter<"InvestmentAccount"> | number
    createdAt?: DateTimeWithAggregatesFilter<"InvestmentAccount"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"InvestmentAccount"> | Date | string
  }

  export type SavingsAccountWhereInput = {
    AND?: SavingsAccountWhereInput | SavingsAccountWhereInput[]
    OR?: SavingsAccountWhereInput[]
    NOT?: SavingsAccountWhereInput | SavingsAccountWhereInput[]
    id?: IntFilter<"SavingsAccount"> | number
    userBankId?: IntFilter<"SavingsAccount"> | number
    balance?: FloatFilter<"SavingsAccount"> | number
    createdAt?: DateTimeFilter<"SavingsAccount"> | Date | string
    updatedAt?: DateTimeFilter<"SavingsAccount"> | Date | string
    userBank?: XOR<UserBankNullableScalarRelationFilter, UserBankWhereInput> | null
  }

  export type SavingsAccountOrderByWithRelationInput = {
    id?: SortOrder
    userBankId?: SortOrder
    balance?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userBank?: UserBankOrderByWithRelationInput
  }

  export type SavingsAccountWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userBankId?: number
    AND?: SavingsAccountWhereInput | SavingsAccountWhereInput[]
    OR?: SavingsAccountWhereInput[]
    NOT?: SavingsAccountWhereInput | SavingsAccountWhereInput[]
    balance?: FloatFilter<"SavingsAccount"> | number
    createdAt?: DateTimeFilter<"SavingsAccount"> | Date | string
    updatedAt?: DateTimeFilter<"SavingsAccount"> | Date | string
    userBank?: XOR<UserBankNullableScalarRelationFilter, UserBankWhereInput> | null
  }, "id" | "userBankId">

  export type SavingsAccountOrderByWithAggregationInput = {
    id?: SortOrder
    userBankId?: SortOrder
    balance?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SavingsAccountCountOrderByAggregateInput
    _avg?: SavingsAccountAvgOrderByAggregateInput
    _max?: SavingsAccountMaxOrderByAggregateInput
    _min?: SavingsAccountMinOrderByAggregateInput
    _sum?: SavingsAccountSumOrderByAggregateInput
  }

  export type SavingsAccountScalarWhereWithAggregatesInput = {
    AND?: SavingsAccountScalarWhereWithAggregatesInput | SavingsAccountScalarWhereWithAggregatesInput[]
    OR?: SavingsAccountScalarWhereWithAggregatesInput[]
    NOT?: SavingsAccountScalarWhereWithAggregatesInput | SavingsAccountScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SavingsAccount"> | number
    userBankId?: IntWithAggregatesFilter<"SavingsAccount"> | number
    balance?: FloatWithAggregatesFilter<"SavingsAccount"> | number
    createdAt?: DateTimeWithAggregatesFilter<"SavingsAccount"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SavingsAccount"> | Date | string
  }

  export type CheckingsAccountWhereInput = {
    AND?: CheckingsAccountWhereInput | CheckingsAccountWhereInput[]
    OR?: CheckingsAccountWhereInput[]
    NOT?: CheckingsAccountWhereInput | CheckingsAccountWhereInput[]
    id?: IntFilter<"CheckingsAccount"> | number
    userBankId?: IntFilter<"CheckingsAccount"> | number
    balance?: FloatFilter<"CheckingsAccount"> | number
    prevMonthsTransactionsSummary?: JsonNullableFilter<"CheckingsAccount">
    createdAt?: DateTimeFilter<"CheckingsAccount"> | Date | string
    updatedAt?: DateTimeFilter<"CheckingsAccount"> | Date | string
    transactions?: TransactionListRelationFilter
    userBank?: XOR<UserBankNullableScalarRelationFilter, UserBankWhereInput> | null
  }

  export type CheckingsAccountOrderByWithRelationInput = {
    id?: SortOrder
    userBankId?: SortOrder
    balance?: SortOrder
    prevMonthsTransactionsSummary?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    transactions?: TransactionOrderByRelationAggregateInput
    userBank?: UserBankOrderByWithRelationInput
  }

  export type CheckingsAccountWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userBankId?: number
    AND?: CheckingsAccountWhereInput | CheckingsAccountWhereInput[]
    OR?: CheckingsAccountWhereInput[]
    NOT?: CheckingsAccountWhereInput | CheckingsAccountWhereInput[]
    balance?: FloatFilter<"CheckingsAccount"> | number
    prevMonthsTransactionsSummary?: JsonNullableFilter<"CheckingsAccount">
    createdAt?: DateTimeFilter<"CheckingsAccount"> | Date | string
    updatedAt?: DateTimeFilter<"CheckingsAccount"> | Date | string
    transactions?: TransactionListRelationFilter
    userBank?: XOR<UserBankNullableScalarRelationFilter, UserBankWhereInput> | null
  }, "id" | "userBankId">

  export type CheckingsAccountOrderByWithAggregationInput = {
    id?: SortOrder
    userBankId?: SortOrder
    balance?: SortOrder
    prevMonthsTransactionsSummary?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CheckingsAccountCountOrderByAggregateInput
    _avg?: CheckingsAccountAvgOrderByAggregateInput
    _max?: CheckingsAccountMaxOrderByAggregateInput
    _min?: CheckingsAccountMinOrderByAggregateInput
    _sum?: CheckingsAccountSumOrderByAggregateInput
  }

  export type CheckingsAccountScalarWhereWithAggregatesInput = {
    AND?: CheckingsAccountScalarWhereWithAggregatesInput | CheckingsAccountScalarWhereWithAggregatesInput[]
    OR?: CheckingsAccountScalarWhereWithAggregatesInput[]
    NOT?: CheckingsAccountScalarWhereWithAggregatesInput | CheckingsAccountScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CheckingsAccount"> | number
    userBankId?: IntWithAggregatesFilter<"CheckingsAccount"> | number
    balance?: FloatWithAggregatesFilter<"CheckingsAccount"> | number
    prevMonthsTransactionsSummary?: JsonNullableWithAggregatesFilter<"CheckingsAccount">
    createdAt?: DateTimeWithAggregatesFilter<"CheckingsAccount"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CheckingsAccount"> | Date | string
  }

  export type TransactionWhereInput = {
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    id?: IntFilter<"Transaction"> | number
    amount?: FloatFilter<"Transaction"> | number
    date?: DateTimeFilter<"Transaction"> | Date | string
    description?: StringFilter<"Transaction"> | string
    category?: StringFilter<"Transaction"> | string
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    updatedAt?: DateTimeFilter<"Transaction"> | Date | string
    checkingsAccountId?: IntFilter<"Transaction"> | number
    checkingsAccount?: XOR<CheckingsAccountScalarRelationFilter, CheckingsAccountWhereInput>
  }

  export type TransactionOrderByWithRelationInput = {
    id?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    description?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    checkingsAccountId?: SortOrder
    checkingsAccount?: CheckingsAccountOrderByWithRelationInput
  }

  export type TransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    amount?: FloatFilter<"Transaction"> | number
    date?: DateTimeFilter<"Transaction"> | Date | string
    description?: StringFilter<"Transaction"> | string
    category?: StringFilter<"Transaction"> | string
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    updatedAt?: DateTimeFilter<"Transaction"> | Date | string
    checkingsAccountId?: IntFilter<"Transaction"> | number
    checkingsAccount?: XOR<CheckingsAccountScalarRelationFilter, CheckingsAccountWhereInput>
  }, "id">

  export type TransactionOrderByWithAggregationInput = {
    id?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    description?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    checkingsAccountId?: SortOrder
    _count?: TransactionCountOrderByAggregateInput
    _avg?: TransactionAvgOrderByAggregateInput
    _max?: TransactionMaxOrderByAggregateInput
    _min?: TransactionMinOrderByAggregateInput
    _sum?: TransactionSumOrderByAggregateInput
  }

  export type TransactionScalarWhereWithAggregatesInput = {
    AND?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    OR?: TransactionScalarWhereWithAggregatesInput[]
    NOT?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Transaction"> | number
    amount?: FloatWithAggregatesFilter<"Transaction"> | number
    date?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
    description?: StringWithAggregatesFilter<"Transaction"> | string
    category?: StringWithAggregatesFilter<"Transaction"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
    checkingsAccountId?: IntWithAggregatesFilter<"Transaction"> | number
  }

  export type PayablesWhereInput = {
    AND?: PayablesWhereInput | PayablesWhereInput[]
    OR?: PayablesWhereInput[]
    NOT?: PayablesWhereInput | PayablesWhereInput[]
    id?: IntFilter<"Payables"> | number
    userId?: StringFilter<"Payables"> | string
    title?: StringFilter<"Payables"> | string
    total?: IntFilter<"Payables"> | number
    priority?: IntFilter<"Payables"> | number
    createdAt?: DateTimeFilter<"Payables"> | Date | string
    updatedAt?: DateTimeFilter<"Payables"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PayablesOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    total?: SortOrder
    priority?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type PayablesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PayablesWhereInput | PayablesWhereInput[]
    OR?: PayablesWhereInput[]
    NOT?: PayablesWhereInput | PayablesWhereInput[]
    userId?: StringFilter<"Payables"> | string
    title?: StringFilter<"Payables"> | string
    total?: IntFilter<"Payables"> | number
    priority?: IntFilter<"Payables"> | number
    createdAt?: DateTimeFilter<"Payables"> | Date | string
    updatedAt?: DateTimeFilter<"Payables"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type PayablesOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    total?: SortOrder
    priority?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PayablesCountOrderByAggregateInput
    _avg?: PayablesAvgOrderByAggregateInput
    _max?: PayablesMaxOrderByAggregateInput
    _min?: PayablesMinOrderByAggregateInput
    _sum?: PayablesSumOrderByAggregateInput
  }

  export type PayablesScalarWhereWithAggregatesInput = {
    AND?: PayablesScalarWhereWithAggregatesInput | PayablesScalarWhereWithAggregatesInput[]
    OR?: PayablesScalarWhereWithAggregatesInput[]
    NOT?: PayablesScalarWhereWithAggregatesInput | PayablesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Payables"> | number
    userId?: StringWithAggregatesFilter<"Payables"> | string
    title?: StringWithAggregatesFilter<"Payables"> | string
    total?: IntWithAggregatesFilter<"Payables"> | number
    priority?: IntWithAggregatesFilter<"Payables"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Payables"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Payables"> | Date | string
  }

  export type SupportMessagesWhereInput = {
    AND?: SupportMessagesWhereInput | SupportMessagesWhereInput[]
    OR?: SupportMessagesWhereInput[]
    NOT?: SupportMessagesWhereInput | SupportMessagesWhereInput[]
    id?: IntFilter<"SupportMessages"> | number
    userId?: StringFilter<"SupportMessages"> | string
    message?: StringFilter<"SupportMessages"> | string
    createdAt?: DateTimeFilter<"SupportMessages"> | Date | string
    updatedAt?: DateTimeFilter<"SupportMessages"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SupportMessagesOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SupportMessagesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SupportMessagesWhereInput | SupportMessagesWhereInput[]
    OR?: SupportMessagesWhereInput[]
    NOT?: SupportMessagesWhereInput | SupportMessagesWhereInput[]
    userId?: StringFilter<"SupportMessages"> | string
    message?: StringFilter<"SupportMessages"> | string
    createdAt?: DateTimeFilter<"SupportMessages"> | Date | string
    updatedAt?: DateTimeFilter<"SupportMessages"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type SupportMessagesOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SupportMessagesCountOrderByAggregateInput
    _avg?: SupportMessagesAvgOrderByAggregateInput
    _max?: SupportMessagesMaxOrderByAggregateInput
    _min?: SupportMessagesMinOrderByAggregateInput
    _sum?: SupportMessagesSumOrderByAggregateInput
  }

  export type SupportMessagesScalarWhereWithAggregatesInput = {
    AND?: SupportMessagesScalarWhereWithAggregatesInput | SupportMessagesScalarWhereWithAggregatesInput[]
    OR?: SupportMessagesScalarWhereWithAggregatesInput[]
    NOT?: SupportMessagesScalarWhereWithAggregatesInput | SupportMessagesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SupportMessages"> | number
    userId?: StringWithAggregatesFilter<"SupportMessages"> | string
    message?: StringWithAggregatesFilter<"SupportMessages"> | string
    createdAt?: DateTimeWithAggregatesFilter<"SupportMessages"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SupportMessages"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    cnic: string
    phone?: string
    password: string
    role?: $Enums.Role
    otp?: string | null
    resetToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userBanks?: UserBankCreateNestedManyWithoutUserInput
    Payables?: PayablesCreateNestedManyWithoutUserInput
    SupportMessages?: SupportMessagesCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    cnic: string
    phone?: string
    password: string
    role?: $Enums.Role
    otp?: string | null
    resetToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userBanks?: UserBankUncheckedCreateNestedManyWithoutUserInput
    Payables?: PayablesUncheckedCreateNestedManyWithoutUserInput
    SupportMessages?: SupportMessagesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cnic?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userBanks?: UserBankUpdateManyWithoutUserNestedInput
    Payables?: PayablesUpdateManyWithoutUserNestedInput
    SupportMessages?: SupportMessagesUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cnic?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userBanks?: UserBankUncheckedUpdateManyWithoutUserNestedInput
    Payables?: PayablesUncheckedUpdateManyWithoutUserNestedInput
    SupportMessages?: SupportMessagesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    cnic: string
    phone?: string
    password: string
    role?: $Enums.Role
    otp?: string | null
    resetToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cnic?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cnic?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateInput = {
    id: string
    sid: string
    data: string
    expiresAt: Date | string
  }

  export type SessionUncheckedCreateInput = {
    id: string
    sid: string
    data: string
    expiresAt: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sid?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sid?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id: string
    sid: string
    data: string
    expiresAt: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sid?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sid?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BankCreateInput = {
    name: string
    logo?: string
    shortDescription?: string
    email?: string
    phone?: string
    userBanks?: UserBankCreateNestedManyWithoutBankInput
  }

  export type BankUncheckedCreateInput = {
    id?: number
    name: string
    logo?: string
    shortDescription?: string
    email?: string
    phone?: string
    userBanks?: UserBankUncheckedCreateNestedManyWithoutBankInput
  }

  export type BankUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    shortDescription?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    userBanks?: UserBankUpdateManyWithoutBankNestedInput
  }

  export type BankUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    shortDescription?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    userBanks?: UserBankUncheckedUpdateManyWithoutBankNestedInput
  }

  export type BankCreateManyInput = {
    id?: number
    name: string
    logo?: string
    shortDescription?: string
    email?: string
    phone?: string
  }

  export type BankUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    shortDescription?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
  }

  export type BankUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    shortDescription?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
  }

  export type UserBankCreateInput = {
    accountNumber: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutUserBanksInput
    bank: BankCreateNestedOneWithoutUserBanksInput
    savingsAccount?: SavingsAccountCreateNestedOneWithoutUserBankInput
    checkingsAccount?: CheckingsAccountCreateNestedOneWithoutUserBankInput
    investmentAccount?: InvestmentAccountCreateNestedOneWithoutUserBankInput
  }

  export type UserBankUncheckedCreateInput = {
    id?: number
    userId: string
    bankId: number
    accountNumber: string
    createdAt?: Date | string
    updatedAt?: Date | string
    savingsAccount?: SavingsAccountUncheckedCreateNestedOneWithoutUserBankInput
    checkingsAccount?: CheckingsAccountUncheckedCreateNestedOneWithoutUserBankInput
    investmentAccount?: InvestmentAccountUncheckedCreateNestedOneWithoutUserBankInput
  }

  export type UserBankUpdateInput = {
    accountNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserBanksNestedInput
    bank?: BankUpdateOneRequiredWithoutUserBanksNestedInput
    savingsAccount?: SavingsAccountUpdateOneWithoutUserBankNestedInput
    checkingsAccount?: CheckingsAccountUpdateOneWithoutUserBankNestedInput
    investmentAccount?: InvestmentAccountUpdateOneWithoutUserBankNestedInput
  }

  export type UserBankUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    bankId?: IntFieldUpdateOperationsInput | number
    accountNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    savingsAccount?: SavingsAccountUncheckedUpdateOneWithoutUserBankNestedInput
    checkingsAccount?: CheckingsAccountUncheckedUpdateOneWithoutUserBankNestedInput
    investmentAccount?: InvestmentAccountUncheckedUpdateOneWithoutUserBankNestedInput
  }

  export type UserBankCreateManyInput = {
    id?: number
    userId: string
    bankId: number
    accountNumber: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserBankUpdateManyMutationInput = {
    accountNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserBankUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    bankId?: IntFieldUpdateOperationsInput | number
    accountNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvestmentAccountCreateInput = {
    portfolio?: number
    profitLoss?: number
    cashBalance?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userBank?: UserBankCreateNestedOneWithoutInvestmentAccountInput
  }

  export type InvestmentAccountUncheckedCreateInput = {
    id?: number
    userBankId: number
    portfolio?: number
    profitLoss?: number
    cashBalance?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvestmentAccountUpdateInput = {
    portfolio?: FloatFieldUpdateOperationsInput | number
    profitLoss?: FloatFieldUpdateOperationsInput | number
    cashBalance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userBank?: UserBankUpdateOneWithoutInvestmentAccountNestedInput
  }

  export type InvestmentAccountUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userBankId?: IntFieldUpdateOperationsInput | number
    portfolio?: FloatFieldUpdateOperationsInput | number
    profitLoss?: FloatFieldUpdateOperationsInput | number
    cashBalance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvestmentAccountCreateManyInput = {
    id?: number
    userBankId: number
    portfolio?: number
    profitLoss?: number
    cashBalance?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvestmentAccountUpdateManyMutationInput = {
    portfolio?: FloatFieldUpdateOperationsInput | number
    profitLoss?: FloatFieldUpdateOperationsInput | number
    cashBalance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvestmentAccountUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userBankId?: IntFieldUpdateOperationsInput | number
    portfolio?: FloatFieldUpdateOperationsInput | number
    profitLoss?: FloatFieldUpdateOperationsInput | number
    cashBalance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavingsAccountCreateInput = {
    balance?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userBank?: UserBankCreateNestedOneWithoutSavingsAccountInput
  }

  export type SavingsAccountUncheckedCreateInput = {
    id?: number
    userBankId: number
    balance?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SavingsAccountUpdateInput = {
    balance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userBank?: UserBankUpdateOneWithoutSavingsAccountNestedInput
  }

  export type SavingsAccountUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userBankId?: IntFieldUpdateOperationsInput | number
    balance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavingsAccountCreateManyInput = {
    id?: number
    userBankId: number
    balance?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SavingsAccountUpdateManyMutationInput = {
    balance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavingsAccountUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userBankId?: IntFieldUpdateOperationsInput | number
    balance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CheckingsAccountCreateInput = {
    balance?: number
    prevMonthsTransactionsSummary?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: TransactionCreateNestedManyWithoutCheckingsAccountInput
    userBank?: UserBankCreateNestedOneWithoutCheckingsAccountInput
  }

  export type CheckingsAccountUncheckedCreateInput = {
    id?: number
    userBankId: number
    balance?: number
    prevMonthsTransactionsSummary?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: TransactionUncheckedCreateNestedManyWithoutCheckingsAccountInput
  }

  export type CheckingsAccountUpdateInput = {
    balance?: FloatFieldUpdateOperationsInput | number
    prevMonthsTransactionsSummary?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUpdateManyWithoutCheckingsAccountNestedInput
    userBank?: UserBankUpdateOneWithoutCheckingsAccountNestedInput
  }

  export type CheckingsAccountUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userBankId?: IntFieldUpdateOperationsInput | number
    balance?: FloatFieldUpdateOperationsInput | number
    prevMonthsTransactionsSummary?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUncheckedUpdateManyWithoutCheckingsAccountNestedInput
  }

  export type CheckingsAccountCreateManyInput = {
    id?: number
    userBankId: number
    balance?: number
    prevMonthsTransactionsSummary?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CheckingsAccountUpdateManyMutationInput = {
    balance?: FloatFieldUpdateOperationsInput | number
    prevMonthsTransactionsSummary?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CheckingsAccountUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userBankId?: IntFieldUpdateOperationsInput | number
    balance?: FloatFieldUpdateOperationsInput | number
    prevMonthsTransactionsSummary?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateInput = {
    amount: number
    date: Date | string
    description: string
    category: string
    createdAt?: Date | string
    updatedAt?: Date | string
    checkingsAccount: CheckingsAccountCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateInput = {
    id?: number
    amount: number
    date: Date | string
    description: string
    category: string
    createdAt?: Date | string
    updatedAt?: Date | string
    checkingsAccountId: number
  }

  export type TransactionUpdateInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checkingsAccount?: CheckingsAccountUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checkingsAccountId?: IntFieldUpdateOperationsInput | number
  }

  export type TransactionCreateManyInput = {
    id?: number
    amount: number
    date: Date | string
    description: string
    category: string
    createdAt?: Date | string
    updatedAt?: Date | string
    checkingsAccountId: number
  }

  export type TransactionUpdateManyMutationInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checkingsAccountId?: IntFieldUpdateOperationsInput | number
  }

  export type PayablesCreateInput = {
    title: string
    total: number
    priority: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPayablesInput
  }

  export type PayablesUncheckedCreateInput = {
    id?: number
    userId: string
    title: string
    total: number
    priority: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PayablesUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    priority?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPayablesNestedInput
  }

  export type PayablesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    priority?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PayablesCreateManyInput = {
    id?: number
    userId: string
    title: string
    total: number
    priority: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PayablesUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    priority?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PayablesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    priority?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupportMessagesCreateInput = {
    message: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSupportMessagesInput
  }

  export type SupportMessagesUncheckedCreateInput = {
    id?: number
    userId: string
    message: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SupportMessagesUpdateInput = {
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSupportMessagesNestedInput
  }

  export type SupportMessagesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupportMessagesCreateManyInput = {
    id?: number
    userId: string
    message: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SupportMessagesUpdateManyMutationInput = {
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupportMessagesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserBankListRelationFilter = {
    every?: UserBankWhereInput
    some?: UserBankWhereInput
    none?: UserBankWhereInput
  }

  export type PayablesListRelationFilter = {
    every?: PayablesWhereInput
    some?: PayablesWhereInput
    none?: PayablesWhereInput
  }

  export type SupportMessagesListRelationFilter = {
    every?: SupportMessagesWhereInput
    some?: SupportMessagesWhereInput
    none?: SupportMessagesWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserBankOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PayablesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SupportMessagesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    cnic?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    role?: SortOrder
    otp?: SortOrder
    resetToken?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    cnic?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    role?: SortOrder
    otp?: SortOrder
    resetToken?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    cnic?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    role?: SortOrder
    otp?: SortOrder
    resetToken?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    sid?: SortOrder
    data?: SortOrder
    expiresAt?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    sid?: SortOrder
    data?: SortOrder
    expiresAt?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    sid?: SortOrder
    data?: SortOrder
    expiresAt?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BankCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    logo?: SortOrder
    shortDescription?: SortOrder
    email?: SortOrder
    phone?: SortOrder
  }

  export type BankAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BankMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    logo?: SortOrder
    shortDescription?: SortOrder
    email?: SortOrder
    phone?: SortOrder
  }

  export type BankMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    logo?: SortOrder
    shortDescription?: SortOrder
    email?: SortOrder
    phone?: SortOrder
  }

  export type BankSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type BankScalarRelationFilter = {
    is?: BankWhereInput
    isNot?: BankWhereInput
  }

  export type SavingsAccountNullableScalarRelationFilter = {
    is?: SavingsAccountWhereInput | null
    isNot?: SavingsAccountWhereInput | null
  }

  export type CheckingsAccountNullableScalarRelationFilter = {
    is?: CheckingsAccountWhereInput | null
    isNot?: CheckingsAccountWhereInput | null
  }

  export type InvestmentAccountNullableScalarRelationFilter = {
    is?: InvestmentAccountWhereInput | null
    isNot?: InvestmentAccountWhereInput | null
  }

  export type UserBankUserIdBankIdCompoundUniqueInput = {
    userId: string
    bankId: number
  }

  export type UserBankCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bankId?: SortOrder
    accountNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserBankAvgOrderByAggregateInput = {
    id?: SortOrder
    bankId?: SortOrder
  }

  export type UserBankMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bankId?: SortOrder
    accountNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserBankMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bankId?: SortOrder
    accountNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserBankSumOrderByAggregateInput = {
    id?: SortOrder
    bankId?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type UserBankNullableScalarRelationFilter = {
    is?: UserBankWhereInput | null
    isNot?: UserBankWhereInput | null
  }

  export type InvestmentAccountCountOrderByAggregateInput = {
    id?: SortOrder
    userBankId?: SortOrder
    portfolio?: SortOrder
    profitLoss?: SortOrder
    cashBalance?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InvestmentAccountAvgOrderByAggregateInput = {
    id?: SortOrder
    userBankId?: SortOrder
    portfolio?: SortOrder
    profitLoss?: SortOrder
    cashBalance?: SortOrder
  }

  export type InvestmentAccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userBankId?: SortOrder
    portfolio?: SortOrder
    profitLoss?: SortOrder
    cashBalance?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InvestmentAccountMinOrderByAggregateInput = {
    id?: SortOrder
    userBankId?: SortOrder
    portfolio?: SortOrder
    profitLoss?: SortOrder
    cashBalance?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InvestmentAccountSumOrderByAggregateInput = {
    id?: SortOrder
    userBankId?: SortOrder
    portfolio?: SortOrder
    profitLoss?: SortOrder
    cashBalance?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type SavingsAccountCountOrderByAggregateInput = {
    id?: SortOrder
    userBankId?: SortOrder
    balance?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SavingsAccountAvgOrderByAggregateInput = {
    id?: SortOrder
    userBankId?: SortOrder
    balance?: SortOrder
  }

  export type SavingsAccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userBankId?: SortOrder
    balance?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SavingsAccountMinOrderByAggregateInput = {
    id?: SortOrder
    userBankId?: SortOrder
    balance?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SavingsAccountSumOrderByAggregateInput = {
    id?: SortOrder
    userBankId?: SortOrder
    balance?: SortOrder
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type TransactionListRelationFilter = {
    every?: TransactionWhereInput
    some?: TransactionWhereInput
    none?: TransactionWhereInput
  }

  export type TransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CheckingsAccountCountOrderByAggregateInput = {
    id?: SortOrder
    userBankId?: SortOrder
    balance?: SortOrder
    prevMonthsTransactionsSummary?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CheckingsAccountAvgOrderByAggregateInput = {
    id?: SortOrder
    userBankId?: SortOrder
    balance?: SortOrder
  }

  export type CheckingsAccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userBankId?: SortOrder
    balance?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CheckingsAccountMinOrderByAggregateInput = {
    id?: SortOrder
    userBankId?: SortOrder
    balance?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CheckingsAccountSumOrderByAggregateInput = {
    id?: SortOrder
    userBankId?: SortOrder
    balance?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type CheckingsAccountScalarRelationFilter = {
    is?: CheckingsAccountWhereInput
    isNot?: CheckingsAccountWhereInput
  }

  export type TransactionCountOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    description?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    checkingsAccountId?: SortOrder
  }

  export type TransactionAvgOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    checkingsAccountId?: SortOrder
  }

  export type TransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    description?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    checkingsAccountId?: SortOrder
  }

  export type TransactionMinOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    description?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    checkingsAccountId?: SortOrder
  }

  export type TransactionSumOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    checkingsAccountId?: SortOrder
  }

  export type PayablesCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    total?: SortOrder
    priority?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PayablesAvgOrderByAggregateInput = {
    id?: SortOrder
    total?: SortOrder
    priority?: SortOrder
  }

  export type PayablesMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    total?: SortOrder
    priority?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PayablesMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    total?: SortOrder
    priority?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PayablesSumOrderByAggregateInput = {
    id?: SortOrder
    total?: SortOrder
    priority?: SortOrder
  }

  export type SupportMessagesCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SupportMessagesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SupportMessagesMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SupportMessagesMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SupportMessagesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserBankCreateNestedManyWithoutUserInput = {
    create?: XOR<UserBankCreateWithoutUserInput, UserBankUncheckedCreateWithoutUserInput> | UserBankCreateWithoutUserInput[] | UserBankUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserBankCreateOrConnectWithoutUserInput | UserBankCreateOrConnectWithoutUserInput[]
    createMany?: UserBankCreateManyUserInputEnvelope
    connect?: UserBankWhereUniqueInput | UserBankWhereUniqueInput[]
  }

  export type PayablesCreateNestedManyWithoutUserInput = {
    create?: XOR<PayablesCreateWithoutUserInput, PayablesUncheckedCreateWithoutUserInput> | PayablesCreateWithoutUserInput[] | PayablesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PayablesCreateOrConnectWithoutUserInput | PayablesCreateOrConnectWithoutUserInput[]
    createMany?: PayablesCreateManyUserInputEnvelope
    connect?: PayablesWhereUniqueInput | PayablesWhereUniqueInput[]
  }

  export type SupportMessagesCreateNestedManyWithoutUserInput = {
    create?: XOR<SupportMessagesCreateWithoutUserInput, SupportMessagesUncheckedCreateWithoutUserInput> | SupportMessagesCreateWithoutUserInput[] | SupportMessagesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SupportMessagesCreateOrConnectWithoutUserInput | SupportMessagesCreateOrConnectWithoutUserInput[]
    createMany?: SupportMessagesCreateManyUserInputEnvelope
    connect?: SupportMessagesWhereUniqueInput | SupportMessagesWhereUniqueInput[]
  }

  export type UserBankUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserBankCreateWithoutUserInput, UserBankUncheckedCreateWithoutUserInput> | UserBankCreateWithoutUserInput[] | UserBankUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserBankCreateOrConnectWithoutUserInput | UserBankCreateOrConnectWithoutUserInput[]
    createMany?: UserBankCreateManyUserInputEnvelope
    connect?: UserBankWhereUniqueInput | UserBankWhereUniqueInput[]
  }

  export type PayablesUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PayablesCreateWithoutUserInput, PayablesUncheckedCreateWithoutUserInput> | PayablesCreateWithoutUserInput[] | PayablesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PayablesCreateOrConnectWithoutUserInput | PayablesCreateOrConnectWithoutUserInput[]
    createMany?: PayablesCreateManyUserInputEnvelope
    connect?: PayablesWhereUniqueInput | PayablesWhereUniqueInput[]
  }

  export type SupportMessagesUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SupportMessagesCreateWithoutUserInput, SupportMessagesUncheckedCreateWithoutUserInput> | SupportMessagesCreateWithoutUserInput[] | SupportMessagesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SupportMessagesCreateOrConnectWithoutUserInput | SupportMessagesCreateOrConnectWithoutUserInput[]
    createMany?: SupportMessagesCreateManyUserInputEnvelope
    connect?: SupportMessagesWhereUniqueInput | SupportMessagesWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserBankUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserBankCreateWithoutUserInput, UserBankUncheckedCreateWithoutUserInput> | UserBankCreateWithoutUserInput[] | UserBankUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserBankCreateOrConnectWithoutUserInput | UserBankCreateOrConnectWithoutUserInput[]
    upsert?: UserBankUpsertWithWhereUniqueWithoutUserInput | UserBankUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserBankCreateManyUserInputEnvelope
    set?: UserBankWhereUniqueInput | UserBankWhereUniqueInput[]
    disconnect?: UserBankWhereUniqueInput | UserBankWhereUniqueInput[]
    delete?: UserBankWhereUniqueInput | UserBankWhereUniqueInput[]
    connect?: UserBankWhereUniqueInput | UserBankWhereUniqueInput[]
    update?: UserBankUpdateWithWhereUniqueWithoutUserInput | UserBankUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserBankUpdateManyWithWhereWithoutUserInput | UserBankUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserBankScalarWhereInput | UserBankScalarWhereInput[]
  }

  export type PayablesUpdateManyWithoutUserNestedInput = {
    create?: XOR<PayablesCreateWithoutUserInput, PayablesUncheckedCreateWithoutUserInput> | PayablesCreateWithoutUserInput[] | PayablesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PayablesCreateOrConnectWithoutUserInput | PayablesCreateOrConnectWithoutUserInput[]
    upsert?: PayablesUpsertWithWhereUniqueWithoutUserInput | PayablesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PayablesCreateManyUserInputEnvelope
    set?: PayablesWhereUniqueInput | PayablesWhereUniqueInput[]
    disconnect?: PayablesWhereUniqueInput | PayablesWhereUniqueInput[]
    delete?: PayablesWhereUniqueInput | PayablesWhereUniqueInput[]
    connect?: PayablesWhereUniqueInput | PayablesWhereUniqueInput[]
    update?: PayablesUpdateWithWhereUniqueWithoutUserInput | PayablesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PayablesUpdateManyWithWhereWithoutUserInput | PayablesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PayablesScalarWhereInput | PayablesScalarWhereInput[]
  }

  export type SupportMessagesUpdateManyWithoutUserNestedInput = {
    create?: XOR<SupportMessagesCreateWithoutUserInput, SupportMessagesUncheckedCreateWithoutUserInput> | SupportMessagesCreateWithoutUserInput[] | SupportMessagesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SupportMessagesCreateOrConnectWithoutUserInput | SupportMessagesCreateOrConnectWithoutUserInput[]
    upsert?: SupportMessagesUpsertWithWhereUniqueWithoutUserInput | SupportMessagesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SupportMessagesCreateManyUserInputEnvelope
    set?: SupportMessagesWhereUniqueInput | SupportMessagesWhereUniqueInput[]
    disconnect?: SupportMessagesWhereUniqueInput | SupportMessagesWhereUniqueInput[]
    delete?: SupportMessagesWhereUniqueInput | SupportMessagesWhereUniqueInput[]
    connect?: SupportMessagesWhereUniqueInput | SupportMessagesWhereUniqueInput[]
    update?: SupportMessagesUpdateWithWhereUniqueWithoutUserInput | SupportMessagesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SupportMessagesUpdateManyWithWhereWithoutUserInput | SupportMessagesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SupportMessagesScalarWhereInput | SupportMessagesScalarWhereInput[]
  }

  export type UserBankUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserBankCreateWithoutUserInput, UserBankUncheckedCreateWithoutUserInput> | UserBankCreateWithoutUserInput[] | UserBankUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserBankCreateOrConnectWithoutUserInput | UserBankCreateOrConnectWithoutUserInput[]
    upsert?: UserBankUpsertWithWhereUniqueWithoutUserInput | UserBankUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserBankCreateManyUserInputEnvelope
    set?: UserBankWhereUniqueInput | UserBankWhereUniqueInput[]
    disconnect?: UserBankWhereUniqueInput | UserBankWhereUniqueInput[]
    delete?: UserBankWhereUniqueInput | UserBankWhereUniqueInput[]
    connect?: UserBankWhereUniqueInput | UserBankWhereUniqueInput[]
    update?: UserBankUpdateWithWhereUniqueWithoutUserInput | UserBankUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserBankUpdateManyWithWhereWithoutUserInput | UserBankUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserBankScalarWhereInput | UserBankScalarWhereInput[]
  }

  export type PayablesUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PayablesCreateWithoutUserInput, PayablesUncheckedCreateWithoutUserInput> | PayablesCreateWithoutUserInput[] | PayablesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PayablesCreateOrConnectWithoutUserInput | PayablesCreateOrConnectWithoutUserInput[]
    upsert?: PayablesUpsertWithWhereUniqueWithoutUserInput | PayablesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PayablesCreateManyUserInputEnvelope
    set?: PayablesWhereUniqueInput | PayablesWhereUniqueInput[]
    disconnect?: PayablesWhereUniqueInput | PayablesWhereUniqueInput[]
    delete?: PayablesWhereUniqueInput | PayablesWhereUniqueInput[]
    connect?: PayablesWhereUniqueInput | PayablesWhereUniqueInput[]
    update?: PayablesUpdateWithWhereUniqueWithoutUserInput | PayablesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PayablesUpdateManyWithWhereWithoutUserInput | PayablesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PayablesScalarWhereInput | PayablesScalarWhereInput[]
  }

  export type SupportMessagesUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SupportMessagesCreateWithoutUserInput, SupportMessagesUncheckedCreateWithoutUserInput> | SupportMessagesCreateWithoutUserInput[] | SupportMessagesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SupportMessagesCreateOrConnectWithoutUserInput | SupportMessagesCreateOrConnectWithoutUserInput[]
    upsert?: SupportMessagesUpsertWithWhereUniqueWithoutUserInput | SupportMessagesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SupportMessagesCreateManyUserInputEnvelope
    set?: SupportMessagesWhereUniqueInput | SupportMessagesWhereUniqueInput[]
    disconnect?: SupportMessagesWhereUniqueInput | SupportMessagesWhereUniqueInput[]
    delete?: SupportMessagesWhereUniqueInput | SupportMessagesWhereUniqueInput[]
    connect?: SupportMessagesWhereUniqueInput | SupportMessagesWhereUniqueInput[]
    update?: SupportMessagesUpdateWithWhereUniqueWithoutUserInput | SupportMessagesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SupportMessagesUpdateManyWithWhereWithoutUserInput | SupportMessagesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SupportMessagesScalarWhereInput | SupportMessagesScalarWhereInput[]
  }

  export type UserBankCreateNestedManyWithoutBankInput = {
    create?: XOR<UserBankCreateWithoutBankInput, UserBankUncheckedCreateWithoutBankInput> | UserBankCreateWithoutBankInput[] | UserBankUncheckedCreateWithoutBankInput[]
    connectOrCreate?: UserBankCreateOrConnectWithoutBankInput | UserBankCreateOrConnectWithoutBankInput[]
    createMany?: UserBankCreateManyBankInputEnvelope
    connect?: UserBankWhereUniqueInput | UserBankWhereUniqueInput[]
  }

  export type UserBankUncheckedCreateNestedManyWithoutBankInput = {
    create?: XOR<UserBankCreateWithoutBankInput, UserBankUncheckedCreateWithoutBankInput> | UserBankCreateWithoutBankInput[] | UserBankUncheckedCreateWithoutBankInput[]
    connectOrCreate?: UserBankCreateOrConnectWithoutBankInput | UserBankCreateOrConnectWithoutBankInput[]
    createMany?: UserBankCreateManyBankInputEnvelope
    connect?: UserBankWhereUniqueInput | UserBankWhereUniqueInput[]
  }

  export type UserBankUpdateManyWithoutBankNestedInput = {
    create?: XOR<UserBankCreateWithoutBankInput, UserBankUncheckedCreateWithoutBankInput> | UserBankCreateWithoutBankInput[] | UserBankUncheckedCreateWithoutBankInput[]
    connectOrCreate?: UserBankCreateOrConnectWithoutBankInput | UserBankCreateOrConnectWithoutBankInput[]
    upsert?: UserBankUpsertWithWhereUniqueWithoutBankInput | UserBankUpsertWithWhereUniqueWithoutBankInput[]
    createMany?: UserBankCreateManyBankInputEnvelope
    set?: UserBankWhereUniqueInput | UserBankWhereUniqueInput[]
    disconnect?: UserBankWhereUniqueInput | UserBankWhereUniqueInput[]
    delete?: UserBankWhereUniqueInput | UserBankWhereUniqueInput[]
    connect?: UserBankWhereUniqueInput | UserBankWhereUniqueInput[]
    update?: UserBankUpdateWithWhereUniqueWithoutBankInput | UserBankUpdateWithWhereUniqueWithoutBankInput[]
    updateMany?: UserBankUpdateManyWithWhereWithoutBankInput | UserBankUpdateManyWithWhereWithoutBankInput[]
    deleteMany?: UserBankScalarWhereInput | UserBankScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserBankUncheckedUpdateManyWithoutBankNestedInput = {
    create?: XOR<UserBankCreateWithoutBankInput, UserBankUncheckedCreateWithoutBankInput> | UserBankCreateWithoutBankInput[] | UserBankUncheckedCreateWithoutBankInput[]
    connectOrCreate?: UserBankCreateOrConnectWithoutBankInput | UserBankCreateOrConnectWithoutBankInput[]
    upsert?: UserBankUpsertWithWhereUniqueWithoutBankInput | UserBankUpsertWithWhereUniqueWithoutBankInput[]
    createMany?: UserBankCreateManyBankInputEnvelope
    set?: UserBankWhereUniqueInput | UserBankWhereUniqueInput[]
    disconnect?: UserBankWhereUniqueInput | UserBankWhereUniqueInput[]
    delete?: UserBankWhereUniqueInput | UserBankWhereUniqueInput[]
    connect?: UserBankWhereUniqueInput | UserBankWhereUniqueInput[]
    update?: UserBankUpdateWithWhereUniqueWithoutBankInput | UserBankUpdateWithWhereUniqueWithoutBankInput[]
    updateMany?: UserBankUpdateManyWithWhereWithoutBankInput | UserBankUpdateManyWithWhereWithoutBankInput[]
    deleteMany?: UserBankScalarWhereInput | UserBankScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutUserBanksInput = {
    create?: XOR<UserCreateWithoutUserBanksInput, UserUncheckedCreateWithoutUserBanksInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserBanksInput
    connect?: UserWhereUniqueInput
  }

  export type BankCreateNestedOneWithoutUserBanksInput = {
    create?: XOR<BankCreateWithoutUserBanksInput, BankUncheckedCreateWithoutUserBanksInput>
    connectOrCreate?: BankCreateOrConnectWithoutUserBanksInput
    connect?: BankWhereUniqueInput
  }

  export type SavingsAccountCreateNestedOneWithoutUserBankInput = {
    create?: XOR<SavingsAccountCreateWithoutUserBankInput, SavingsAccountUncheckedCreateWithoutUserBankInput>
    connectOrCreate?: SavingsAccountCreateOrConnectWithoutUserBankInput
    connect?: SavingsAccountWhereUniqueInput
  }

  export type CheckingsAccountCreateNestedOneWithoutUserBankInput = {
    create?: XOR<CheckingsAccountCreateWithoutUserBankInput, CheckingsAccountUncheckedCreateWithoutUserBankInput>
    connectOrCreate?: CheckingsAccountCreateOrConnectWithoutUserBankInput
    connect?: CheckingsAccountWhereUniqueInput
  }

  export type InvestmentAccountCreateNestedOneWithoutUserBankInput = {
    create?: XOR<InvestmentAccountCreateWithoutUserBankInput, InvestmentAccountUncheckedCreateWithoutUserBankInput>
    connectOrCreate?: InvestmentAccountCreateOrConnectWithoutUserBankInput
    connect?: InvestmentAccountWhereUniqueInput
  }

  export type SavingsAccountUncheckedCreateNestedOneWithoutUserBankInput = {
    create?: XOR<SavingsAccountCreateWithoutUserBankInput, SavingsAccountUncheckedCreateWithoutUserBankInput>
    connectOrCreate?: SavingsAccountCreateOrConnectWithoutUserBankInput
    connect?: SavingsAccountWhereUniqueInput
  }

  export type CheckingsAccountUncheckedCreateNestedOneWithoutUserBankInput = {
    create?: XOR<CheckingsAccountCreateWithoutUserBankInput, CheckingsAccountUncheckedCreateWithoutUserBankInput>
    connectOrCreate?: CheckingsAccountCreateOrConnectWithoutUserBankInput
    connect?: CheckingsAccountWhereUniqueInput
  }

  export type InvestmentAccountUncheckedCreateNestedOneWithoutUserBankInput = {
    create?: XOR<InvestmentAccountCreateWithoutUserBankInput, InvestmentAccountUncheckedCreateWithoutUserBankInput>
    connectOrCreate?: InvestmentAccountCreateOrConnectWithoutUserBankInput
    connect?: InvestmentAccountWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUserBanksNestedInput = {
    create?: XOR<UserCreateWithoutUserBanksInput, UserUncheckedCreateWithoutUserBanksInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserBanksInput
    upsert?: UserUpsertWithoutUserBanksInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserBanksInput, UserUpdateWithoutUserBanksInput>, UserUncheckedUpdateWithoutUserBanksInput>
  }

  export type BankUpdateOneRequiredWithoutUserBanksNestedInput = {
    create?: XOR<BankCreateWithoutUserBanksInput, BankUncheckedCreateWithoutUserBanksInput>
    connectOrCreate?: BankCreateOrConnectWithoutUserBanksInput
    upsert?: BankUpsertWithoutUserBanksInput
    connect?: BankWhereUniqueInput
    update?: XOR<XOR<BankUpdateToOneWithWhereWithoutUserBanksInput, BankUpdateWithoutUserBanksInput>, BankUncheckedUpdateWithoutUserBanksInput>
  }

  export type SavingsAccountUpdateOneWithoutUserBankNestedInput = {
    create?: XOR<SavingsAccountCreateWithoutUserBankInput, SavingsAccountUncheckedCreateWithoutUserBankInput>
    connectOrCreate?: SavingsAccountCreateOrConnectWithoutUserBankInput
    upsert?: SavingsAccountUpsertWithoutUserBankInput
    disconnect?: SavingsAccountWhereInput | boolean
    delete?: SavingsAccountWhereInput | boolean
    connect?: SavingsAccountWhereUniqueInput
    update?: XOR<XOR<SavingsAccountUpdateToOneWithWhereWithoutUserBankInput, SavingsAccountUpdateWithoutUserBankInput>, SavingsAccountUncheckedUpdateWithoutUserBankInput>
  }

  export type CheckingsAccountUpdateOneWithoutUserBankNestedInput = {
    create?: XOR<CheckingsAccountCreateWithoutUserBankInput, CheckingsAccountUncheckedCreateWithoutUserBankInput>
    connectOrCreate?: CheckingsAccountCreateOrConnectWithoutUserBankInput
    upsert?: CheckingsAccountUpsertWithoutUserBankInput
    disconnect?: CheckingsAccountWhereInput | boolean
    delete?: CheckingsAccountWhereInput | boolean
    connect?: CheckingsAccountWhereUniqueInput
    update?: XOR<XOR<CheckingsAccountUpdateToOneWithWhereWithoutUserBankInput, CheckingsAccountUpdateWithoutUserBankInput>, CheckingsAccountUncheckedUpdateWithoutUserBankInput>
  }

  export type InvestmentAccountUpdateOneWithoutUserBankNestedInput = {
    create?: XOR<InvestmentAccountCreateWithoutUserBankInput, InvestmentAccountUncheckedCreateWithoutUserBankInput>
    connectOrCreate?: InvestmentAccountCreateOrConnectWithoutUserBankInput
    upsert?: InvestmentAccountUpsertWithoutUserBankInput
    disconnect?: InvestmentAccountWhereInput | boolean
    delete?: InvestmentAccountWhereInput | boolean
    connect?: InvestmentAccountWhereUniqueInput
    update?: XOR<XOR<InvestmentAccountUpdateToOneWithWhereWithoutUserBankInput, InvestmentAccountUpdateWithoutUserBankInput>, InvestmentAccountUncheckedUpdateWithoutUserBankInput>
  }

  export type SavingsAccountUncheckedUpdateOneWithoutUserBankNestedInput = {
    create?: XOR<SavingsAccountCreateWithoutUserBankInput, SavingsAccountUncheckedCreateWithoutUserBankInput>
    connectOrCreate?: SavingsAccountCreateOrConnectWithoutUserBankInput
    upsert?: SavingsAccountUpsertWithoutUserBankInput
    disconnect?: SavingsAccountWhereInput | boolean
    delete?: SavingsAccountWhereInput | boolean
    connect?: SavingsAccountWhereUniqueInput
    update?: XOR<XOR<SavingsAccountUpdateToOneWithWhereWithoutUserBankInput, SavingsAccountUpdateWithoutUserBankInput>, SavingsAccountUncheckedUpdateWithoutUserBankInput>
  }

  export type CheckingsAccountUncheckedUpdateOneWithoutUserBankNestedInput = {
    create?: XOR<CheckingsAccountCreateWithoutUserBankInput, CheckingsAccountUncheckedCreateWithoutUserBankInput>
    connectOrCreate?: CheckingsAccountCreateOrConnectWithoutUserBankInput
    upsert?: CheckingsAccountUpsertWithoutUserBankInput
    disconnect?: CheckingsAccountWhereInput | boolean
    delete?: CheckingsAccountWhereInput | boolean
    connect?: CheckingsAccountWhereUniqueInput
    update?: XOR<XOR<CheckingsAccountUpdateToOneWithWhereWithoutUserBankInput, CheckingsAccountUpdateWithoutUserBankInput>, CheckingsAccountUncheckedUpdateWithoutUserBankInput>
  }

  export type InvestmentAccountUncheckedUpdateOneWithoutUserBankNestedInput = {
    create?: XOR<InvestmentAccountCreateWithoutUserBankInput, InvestmentAccountUncheckedCreateWithoutUserBankInput>
    connectOrCreate?: InvestmentAccountCreateOrConnectWithoutUserBankInput
    upsert?: InvestmentAccountUpsertWithoutUserBankInput
    disconnect?: InvestmentAccountWhereInput | boolean
    delete?: InvestmentAccountWhereInput | boolean
    connect?: InvestmentAccountWhereUniqueInput
    update?: XOR<XOR<InvestmentAccountUpdateToOneWithWhereWithoutUserBankInput, InvestmentAccountUpdateWithoutUserBankInput>, InvestmentAccountUncheckedUpdateWithoutUserBankInput>
  }

  export type UserBankCreateNestedOneWithoutInvestmentAccountInput = {
    create?: XOR<UserBankCreateWithoutInvestmentAccountInput, UserBankUncheckedCreateWithoutInvestmentAccountInput>
    connectOrCreate?: UserBankCreateOrConnectWithoutInvestmentAccountInput
    connect?: UserBankWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserBankUpdateOneWithoutInvestmentAccountNestedInput = {
    create?: XOR<UserBankCreateWithoutInvestmentAccountInput, UserBankUncheckedCreateWithoutInvestmentAccountInput>
    connectOrCreate?: UserBankCreateOrConnectWithoutInvestmentAccountInput
    upsert?: UserBankUpsertWithoutInvestmentAccountInput
    disconnect?: UserBankWhereInput | boolean
    delete?: UserBankWhereInput | boolean
    connect?: UserBankWhereUniqueInput
    update?: XOR<XOR<UserBankUpdateToOneWithWhereWithoutInvestmentAccountInput, UserBankUpdateWithoutInvestmentAccountInput>, UserBankUncheckedUpdateWithoutInvestmentAccountInput>
  }

  export type UserBankCreateNestedOneWithoutSavingsAccountInput = {
    create?: XOR<UserBankCreateWithoutSavingsAccountInput, UserBankUncheckedCreateWithoutSavingsAccountInput>
    connectOrCreate?: UserBankCreateOrConnectWithoutSavingsAccountInput
    connect?: UserBankWhereUniqueInput
  }

  export type UserBankUpdateOneWithoutSavingsAccountNestedInput = {
    create?: XOR<UserBankCreateWithoutSavingsAccountInput, UserBankUncheckedCreateWithoutSavingsAccountInput>
    connectOrCreate?: UserBankCreateOrConnectWithoutSavingsAccountInput
    upsert?: UserBankUpsertWithoutSavingsAccountInput
    disconnect?: UserBankWhereInput | boolean
    delete?: UserBankWhereInput | boolean
    connect?: UserBankWhereUniqueInput
    update?: XOR<XOR<UserBankUpdateToOneWithWhereWithoutSavingsAccountInput, UserBankUpdateWithoutSavingsAccountInput>, UserBankUncheckedUpdateWithoutSavingsAccountInput>
  }

  export type TransactionCreateNestedManyWithoutCheckingsAccountInput = {
    create?: XOR<TransactionCreateWithoutCheckingsAccountInput, TransactionUncheckedCreateWithoutCheckingsAccountInput> | TransactionCreateWithoutCheckingsAccountInput[] | TransactionUncheckedCreateWithoutCheckingsAccountInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutCheckingsAccountInput | TransactionCreateOrConnectWithoutCheckingsAccountInput[]
    createMany?: TransactionCreateManyCheckingsAccountInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type UserBankCreateNestedOneWithoutCheckingsAccountInput = {
    create?: XOR<UserBankCreateWithoutCheckingsAccountInput, UserBankUncheckedCreateWithoutCheckingsAccountInput>
    connectOrCreate?: UserBankCreateOrConnectWithoutCheckingsAccountInput
    connect?: UserBankWhereUniqueInput
  }

  export type TransactionUncheckedCreateNestedManyWithoutCheckingsAccountInput = {
    create?: XOR<TransactionCreateWithoutCheckingsAccountInput, TransactionUncheckedCreateWithoutCheckingsAccountInput> | TransactionCreateWithoutCheckingsAccountInput[] | TransactionUncheckedCreateWithoutCheckingsAccountInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutCheckingsAccountInput | TransactionCreateOrConnectWithoutCheckingsAccountInput[]
    createMany?: TransactionCreateManyCheckingsAccountInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type TransactionUpdateManyWithoutCheckingsAccountNestedInput = {
    create?: XOR<TransactionCreateWithoutCheckingsAccountInput, TransactionUncheckedCreateWithoutCheckingsAccountInput> | TransactionCreateWithoutCheckingsAccountInput[] | TransactionUncheckedCreateWithoutCheckingsAccountInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutCheckingsAccountInput | TransactionCreateOrConnectWithoutCheckingsAccountInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutCheckingsAccountInput | TransactionUpsertWithWhereUniqueWithoutCheckingsAccountInput[]
    createMany?: TransactionCreateManyCheckingsAccountInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutCheckingsAccountInput | TransactionUpdateWithWhereUniqueWithoutCheckingsAccountInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutCheckingsAccountInput | TransactionUpdateManyWithWhereWithoutCheckingsAccountInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type UserBankUpdateOneWithoutCheckingsAccountNestedInput = {
    create?: XOR<UserBankCreateWithoutCheckingsAccountInput, UserBankUncheckedCreateWithoutCheckingsAccountInput>
    connectOrCreate?: UserBankCreateOrConnectWithoutCheckingsAccountInput
    upsert?: UserBankUpsertWithoutCheckingsAccountInput
    disconnect?: UserBankWhereInput | boolean
    delete?: UserBankWhereInput | boolean
    connect?: UserBankWhereUniqueInput
    update?: XOR<XOR<UserBankUpdateToOneWithWhereWithoutCheckingsAccountInput, UserBankUpdateWithoutCheckingsAccountInput>, UserBankUncheckedUpdateWithoutCheckingsAccountInput>
  }

  export type TransactionUncheckedUpdateManyWithoutCheckingsAccountNestedInput = {
    create?: XOR<TransactionCreateWithoutCheckingsAccountInput, TransactionUncheckedCreateWithoutCheckingsAccountInput> | TransactionCreateWithoutCheckingsAccountInput[] | TransactionUncheckedCreateWithoutCheckingsAccountInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutCheckingsAccountInput | TransactionCreateOrConnectWithoutCheckingsAccountInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutCheckingsAccountInput | TransactionUpsertWithWhereUniqueWithoutCheckingsAccountInput[]
    createMany?: TransactionCreateManyCheckingsAccountInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutCheckingsAccountInput | TransactionUpdateWithWhereUniqueWithoutCheckingsAccountInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutCheckingsAccountInput | TransactionUpdateManyWithWhereWithoutCheckingsAccountInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type CheckingsAccountCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<CheckingsAccountCreateWithoutTransactionsInput, CheckingsAccountUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: CheckingsAccountCreateOrConnectWithoutTransactionsInput
    connect?: CheckingsAccountWhereUniqueInput
  }

  export type CheckingsAccountUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<CheckingsAccountCreateWithoutTransactionsInput, CheckingsAccountUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: CheckingsAccountCreateOrConnectWithoutTransactionsInput
    upsert?: CheckingsAccountUpsertWithoutTransactionsInput
    connect?: CheckingsAccountWhereUniqueInput
    update?: XOR<XOR<CheckingsAccountUpdateToOneWithWhereWithoutTransactionsInput, CheckingsAccountUpdateWithoutTransactionsInput>, CheckingsAccountUncheckedUpdateWithoutTransactionsInput>
  }

  export type UserCreateNestedOneWithoutPayablesInput = {
    create?: XOR<UserCreateWithoutPayablesInput, UserUncheckedCreateWithoutPayablesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPayablesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutPayablesNestedInput = {
    create?: XOR<UserCreateWithoutPayablesInput, UserUncheckedCreateWithoutPayablesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPayablesInput
    upsert?: UserUpsertWithoutPayablesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPayablesInput, UserUpdateWithoutPayablesInput>, UserUncheckedUpdateWithoutPayablesInput>
  }

  export type UserCreateNestedOneWithoutSupportMessagesInput = {
    create?: XOR<UserCreateWithoutSupportMessagesInput, UserUncheckedCreateWithoutSupportMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSupportMessagesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSupportMessagesNestedInput = {
    create?: XOR<UserCreateWithoutSupportMessagesInput, UserUncheckedCreateWithoutSupportMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSupportMessagesInput
    upsert?: UserUpsertWithoutSupportMessagesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSupportMessagesInput, UserUpdateWithoutSupportMessagesInput>, UserUncheckedUpdateWithoutSupportMessagesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type UserBankCreateWithoutUserInput = {
    accountNumber: string
    createdAt?: Date | string
    updatedAt?: Date | string
    bank: BankCreateNestedOneWithoutUserBanksInput
    savingsAccount?: SavingsAccountCreateNestedOneWithoutUserBankInput
    checkingsAccount?: CheckingsAccountCreateNestedOneWithoutUserBankInput
    investmentAccount?: InvestmentAccountCreateNestedOneWithoutUserBankInput
  }

  export type UserBankUncheckedCreateWithoutUserInput = {
    id?: number
    bankId: number
    accountNumber: string
    createdAt?: Date | string
    updatedAt?: Date | string
    savingsAccount?: SavingsAccountUncheckedCreateNestedOneWithoutUserBankInput
    checkingsAccount?: CheckingsAccountUncheckedCreateNestedOneWithoutUserBankInput
    investmentAccount?: InvestmentAccountUncheckedCreateNestedOneWithoutUserBankInput
  }

  export type UserBankCreateOrConnectWithoutUserInput = {
    where: UserBankWhereUniqueInput
    create: XOR<UserBankCreateWithoutUserInput, UserBankUncheckedCreateWithoutUserInput>
  }

  export type UserBankCreateManyUserInputEnvelope = {
    data: UserBankCreateManyUserInput | UserBankCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PayablesCreateWithoutUserInput = {
    title: string
    total: number
    priority: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PayablesUncheckedCreateWithoutUserInput = {
    id?: number
    title: string
    total: number
    priority: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PayablesCreateOrConnectWithoutUserInput = {
    where: PayablesWhereUniqueInput
    create: XOR<PayablesCreateWithoutUserInput, PayablesUncheckedCreateWithoutUserInput>
  }

  export type PayablesCreateManyUserInputEnvelope = {
    data: PayablesCreateManyUserInput | PayablesCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SupportMessagesCreateWithoutUserInput = {
    message: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SupportMessagesUncheckedCreateWithoutUserInput = {
    id?: number
    message: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SupportMessagesCreateOrConnectWithoutUserInput = {
    where: SupportMessagesWhereUniqueInput
    create: XOR<SupportMessagesCreateWithoutUserInput, SupportMessagesUncheckedCreateWithoutUserInput>
  }

  export type SupportMessagesCreateManyUserInputEnvelope = {
    data: SupportMessagesCreateManyUserInput | SupportMessagesCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserBankUpsertWithWhereUniqueWithoutUserInput = {
    where: UserBankWhereUniqueInput
    update: XOR<UserBankUpdateWithoutUserInput, UserBankUncheckedUpdateWithoutUserInput>
    create: XOR<UserBankCreateWithoutUserInput, UserBankUncheckedCreateWithoutUserInput>
  }

  export type UserBankUpdateWithWhereUniqueWithoutUserInput = {
    where: UserBankWhereUniqueInput
    data: XOR<UserBankUpdateWithoutUserInput, UserBankUncheckedUpdateWithoutUserInput>
  }

  export type UserBankUpdateManyWithWhereWithoutUserInput = {
    where: UserBankScalarWhereInput
    data: XOR<UserBankUpdateManyMutationInput, UserBankUncheckedUpdateManyWithoutUserInput>
  }

  export type UserBankScalarWhereInput = {
    AND?: UserBankScalarWhereInput | UserBankScalarWhereInput[]
    OR?: UserBankScalarWhereInput[]
    NOT?: UserBankScalarWhereInput | UserBankScalarWhereInput[]
    id?: IntFilter<"UserBank"> | number
    userId?: StringFilter<"UserBank"> | string
    bankId?: IntFilter<"UserBank"> | number
    accountNumber?: StringFilter<"UserBank"> | string
    createdAt?: DateTimeFilter<"UserBank"> | Date | string
    updatedAt?: DateTimeFilter<"UserBank"> | Date | string
  }

  export type PayablesUpsertWithWhereUniqueWithoutUserInput = {
    where: PayablesWhereUniqueInput
    update: XOR<PayablesUpdateWithoutUserInput, PayablesUncheckedUpdateWithoutUserInput>
    create: XOR<PayablesCreateWithoutUserInput, PayablesUncheckedCreateWithoutUserInput>
  }

  export type PayablesUpdateWithWhereUniqueWithoutUserInput = {
    where: PayablesWhereUniqueInput
    data: XOR<PayablesUpdateWithoutUserInput, PayablesUncheckedUpdateWithoutUserInput>
  }

  export type PayablesUpdateManyWithWhereWithoutUserInput = {
    where: PayablesScalarWhereInput
    data: XOR<PayablesUpdateManyMutationInput, PayablesUncheckedUpdateManyWithoutUserInput>
  }

  export type PayablesScalarWhereInput = {
    AND?: PayablesScalarWhereInput | PayablesScalarWhereInput[]
    OR?: PayablesScalarWhereInput[]
    NOT?: PayablesScalarWhereInput | PayablesScalarWhereInput[]
    id?: IntFilter<"Payables"> | number
    userId?: StringFilter<"Payables"> | string
    title?: StringFilter<"Payables"> | string
    total?: IntFilter<"Payables"> | number
    priority?: IntFilter<"Payables"> | number
    createdAt?: DateTimeFilter<"Payables"> | Date | string
    updatedAt?: DateTimeFilter<"Payables"> | Date | string
  }

  export type SupportMessagesUpsertWithWhereUniqueWithoutUserInput = {
    where: SupportMessagesWhereUniqueInput
    update: XOR<SupportMessagesUpdateWithoutUserInput, SupportMessagesUncheckedUpdateWithoutUserInput>
    create: XOR<SupportMessagesCreateWithoutUserInput, SupportMessagesUncheckedCreateWithoutUserInput>
  }

  export type SupportMessagesUpdateWithWhereUniqueWithoutUserInput = {
    where: SupportMessagesWhereUniqueInput
    data: XOR<SupportMessagesUpdateWithoutUserInput, SupportMessagesUncheckedUpdateWithoutUserInput>
  }

  export type SupportMessagesUpdateManyWithWhereWithoutUserInput = {
    where: SupportMessagesScalarWhereInput
    data: XOR<SupportMessagesUpdateManyMutationInput, SupportMessagesUncheckedUpdateManyWithoutUserInput>
  }

  export type SupportMessagesScalarWhereInput = {
    AND?: SupportMessagesScalarWhereInput | SupportMessagesScalarWhereInput[]
    OR?: SupportMessagesScalarWhereInput[]
    NOT?: SupportMessagesScalarWhereInput | SupportMessagesScalarWhereInput[]
    id?: IntFilter<"SupportMessages"> | number
    userId?: StringFilter<"SupportMessages"> | string
    message?: StringFilter<"SupportMessages"> | string
    createdAt?: DateTimeFilter<"SupportMessages"> | Date | string
    updatedAt?: DateTimeFilter<"SupportMessages"> | Date | string
  }

  export type UserBankCreateWithoutBankInput = {
    accountNumber: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutUserBanksInput
    savingsAccount?: SavingsAccountCreateNestedOneWithoutUserBankInput
    checkingsAccount?: CheckingsAccountCreateNestedOneWithoutUserBankInput
    investmentAccount?: InvestmentAccountCreateNestedOneWithoutUserBankInput
  }

  export type UserBankUncheckedCreateWithoutBankInput = {
    id?: number
    userId: string
    accountNumber: string
    createdAt?: Date | string
    updatedAt?: Date | string
    savingsAccount?: SavingsAccountUncheckedCreateNestedOneWithoutUserBankInput
    checkingsAccount?: CheckingsAccountUncheckedCreateNestedOneWithoutUserBankInput
    investmentAccount?: InvestmentAccountUncheckedCreateNestedOneWithoutUserBankInput
  }

  export type UserBankCreateOrConnectWithoutBankInput = {
    where: UserBankWhereUniqueInput
    create: XOR<UserBankCreateWithoutBankInput, UserBankUncheckedCreateWithoutBankInput>
  }

  export type UserBankCreateManyBankInputEnvelope = {
    data: UserBankCreateManyBankInput | UserBankCreateManyBankInput[]
    skipDuplicates?: boolean
  }

  export type UserBankUpsertWithWhereUniqueWithoutBankInput = {
    where: UserBankWhereUniqueInput
    update: XOR<UserBankUpdateWithoutBankInput, UserBankUncheckedUpdateWithoutBankInput>
    create: XOR<UserBankCreateWithoutBankInput, UserBankUncheckedCreateWithoutBankInput>
  }

  export type UserBankUpdateWithWhereUniqueWithoutBankInput = {
    where: UserBankWhereUniqueInput
    data: XOR<UserBankUpdateWithoutBankInput, UserBankUncheckedUpdateWithoutBankInput>
  }

  export type UserBankUpdateManyWithWhereWithoutBankInput = {
    where: UserBankScalarWhereInput
    data: XOR<UserBankUpdateManyMutationInput, UserBankUncheckedUpdateManyWithoutBankInput>
  }

  export type UserCreateWithoutUserBanksInput = {
    id?: string
    name: string
    email: string
    cnic: string
    phone?: string
    password: string
    role?: $Enums.Role
    otp?: string | null
    resetToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Payables?: PayablesCreateNestedManyWithoutUserInput
    SupportMessages?: SupportMessagesCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserBanksInput = {
    id?: string
    name: string
    email: string
    cnic: string
    phone?: string
    password: string
    role?: $Enums.Role
    otp?: string | null
    resetToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Payables?: PayablesUncheckedCreateNestedManyWithoutUserInput
    SupportMessages?: SupportMessagesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserBanksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserBanksInput, UserUncheckedCreateWithoutUserBanksInput>
  }

  export type BankCreateWithoutUserBanksInput = {
    name: string
    logo?: string
    shortDescription?: string
    email?: string
    phone?: string
  }

  export type BankUncheckedCreateWithoutUserBanksInput = {
    id?: number
    name: string
    logo?: string
    shortDescription?: string
    email?: string
    phone?: string
  }

  export type BankCreateOrConnectWithoutUserBanksInput = {
    where: BankWhereUniqueInput
    create: XOR<BankCreateWithoutUserBanksInput, BankUncheckedCreateWithoutUserBanksInput>
  }

  export type SavingsAccountCreateWithoutUserBankInput = {
    balance?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SavingsAccountUncheckedCreateWithoutUserBankInput = {
    id?: number
    balance?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SavingsAccountCreateOrConnectWithoutUserBankInput = {
    where: SavingsAccountWhereUniqueInput
    create: XOR<SavingsAccountCreateWithoutUserBankInput, SavingsAccountUncheckedCreateWithoutUserBankInput>
  }

  export type CheckingsAccountCreateWithoutUserBankInput = {
    balance?: number
    prevMonthsTransactionsSummary?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: TransactionCreateNestedManyWithoutCheckingsAccountInput
  }

  export type CheckingsAccountUncheckedCreateWithoutUserBankInput = {
    id?: number
    balance?: number
    prevMonthsTransactionsSummary?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: TransactionUncheckedCreateNestedManyWithoutCheckingsAccountInput
  }

  export type CheckingsAccountCreateOrConnectWithoutUserBankInput = {
    where: CheckingsAccountWhereUniqueInput
    create: XOR<CheckingsAccountCreateWithoutUserBankInput, CheckingsAccountUncheckedCreateWithoutUserBankInput>
  }

  export type InvestmentAccountCreateWithoutUserBankInput = {
    portfolio?: number
    profitLoss?: number
    cashBalance?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvestmentAccountUncheckedCreateWithoutUserBankInput = {
    id?: number
    portfolio?: number
    profitLoss?: number
    cashBalance?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvestmentAccountCreateOrConnectWithoutUserBankInput = {
    where: InvestmentAccountWhereUniqueInput
    create: XOR<InvestmentAccountCreateWithoutUserBankInput, InvestmentAccountUncheckedCreateWithoutUserBankInput>
  }

  export type UserUpsertWithoutUserBanksInput = {
    update: XOR<UserUpdateWithoutUserBanksInput, UserUncheckedUpdateWithoutUserBanksInput>
    create: XOR<UserCreateWithoutUserBanksInput, UserUncheckedCreateWithoutUserBanksInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserBanksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserBanksInput, UserUncheckedUpdateWithoutUserBanksInput>
  }

  export type UserUpdateWithoutUserBanksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cnic?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Payables?: PayablesUpdateManyWithoutUserNestedInput
    SupportMessages?: SupportMessagesUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserBanksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cnic?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Payables?: PayablesUncheckedUpdateManyWithoutUserNestedInput
    SupportMessages?: SupportMessagesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type BankUpsertWithoutUserBanksInput = {
    update: XOR<BankUpdateWithoutUserBanksInput, BankUncheckedUpdateWithoutUserBanksInput>
    create: XOR<BankCreateWithoutUserBanksInput, BankUncheckedCreateWithoutUserBanksInput>
    where?: BankWhereInput
  }

  export type BankUpdateToOneWithWhereWithoutUserBanksInput = {
    where?: BankWhereInput
    data: XOR<BankUpdateWithoutUserBanksInput, BankUncheckedUpdateWithoutUserBanksInput>
  }

  export type BankUpdateWithoutUserBanksInput = {
    name?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    shortDescription?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
  }

  export type BankUncheckedUpdateWithoutUserBanksInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    shortDescription?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
  }

  export type SavingsAccountUpsertWithoutUserBankInput = {
    update: XOR<SavingsAccountUpdateWithoutUserBankInput, SavingsAccountUncheckedUpdateWithoutUserBankInput>
    create: XOR<SavingsAccountCreateWithoutUserBankInput, SavingsAccountUncheckedCreateWithoutUserBankInput>
    where?: SavingsAccountWhereInput
  }

  export type SavingsAccountUpdateToOneWithWhereWithoutUserBankInput = {
    where?: SavingsAccountWhereInput
    data: XOR<SavingsAccountUpdateWithoutUserBankInput, SavingsAccountUncheckedUpdateWithoutUserBankInput>
  }

  export type SavingsAccountUpdateWithoutUserBankInput = {
    balance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavingsAccountUncheckedUpdateWithoutUserBankInput = {
    id?: IntFieldUpdateOperationsInput | number
    balance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CheckingsAccountUpsertWithoutUserBankInput = {
    update: XOR<CheckingsAccountUpdateWithoutUserBankInput, CheckingsAccountUncheckedUpdateWithoutUserBankInput>
    create: XOR<CheckingsAccountCreateWithoutUserBankInput, CheckingsAccountUncheckedCreateWithoutUserBankInput>
    where?: CheckingsAccountWhereInput
  }

  export type CheckingsAccountUpdateToOneWithWhereWithoutUserBankInput = {
    where?: CheckingsAccountWhereInput
    data: XOR<CheckingsAccountUpdateWithoutUserBankInput, CheckingsAccountUncheckedUpdateWithoutUserBankInput>
  }

  export type CheckingsAccountUpdateWithoutUserBankInput = {
    balance?: FloatFieldUpdateOperationsInput | number
    prevMonthsTransactionsSummary?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUpdateManyWithoutCheckingsAccountNestedInput
  }

  export type CheckingsAccountUncheckedUpdateWithoutUserBankInput = {
    id?: IntFieldUpdateOperationsInput | number
    balance?: FloatFieldUpdateOperationsInput | number
    prevMonthsTransactionsSummary?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUncheckedUpdateManyWithoutCheckingsAccountNestedInput
  }

  export type InvestmentAccountUpsertWithoutUserBankInput = {
    update: XOR<InvestmentAccountUpdateWithoutUserBankInput, InvestmentAccountUncheckedUpdateWithoutUserBankInput>
    create: XOR<InvestmentAccountCreateWithoutUserBankInput, InvestmentAccountUncheckedCreateWithoutUserBankInput>
    where?: InvestmentAccountWhereInput
  }

  export type InvestmentAccountUpdateToOneWithWhereWithoutUserBankInput = {
    where?: InvestmentAccountWhereInput
    data: XOR<InvestmentAccountUpdateWithoutUserBankInput, InvestmentAccountUncheckedUpdateWithoutUserBankInput>
  }

  export type InvestmentAccountUpdateWithoutUserBankInput = {
    portfolio?: FloatFieldUpdateOperationsInput | number
    profitLoss?: FloatFieldUpdateOperationsInput | number
    cashBalance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvestmentAccountUncheckedUpdateWithoutUserBankInput = {
    id?: IntFieldUpdateOperationsInput | number
    portfolio?: FloatFieldUpdateOperationsInput | number
    profitLoss?: FloatFieldUpdateOperationsInput | number
    cashBalance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserBankCreateWithoutInvestmentAccountInput = {
    accountNumber: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutUserBanksInput
    bank: BankCreateNestedOneWithoutUserBanksInput
    savingsAccount?: SavingsAccountCreateNestedOneWithoutUserBankInput
    checkingsAccount?: CheckingsAccountCreateNestedOneWithoutUserBankInput
  }

  export type UserBankUncheckedCreateWithoutInvestmentAccountInput = {
    id?: number
    userId: string
    bankId: number
    accountNumber: string
    createdAt?: Date | string
    updatedAt?: Date | string
    savingsAccount?: SavingsAccountUncheckedCreateNestedOneWithoutUserBankInput
    checkingsAccount?: CheckingsAccountUncheckedCreateNestedOneWithoutUserBankInput
  }

  export type UserBankCreateOrConnectWithoutInvestmentAccountInput = {
    where: UserBankWhereUniqueInput
    create: XOR<UserBankCreateWithoutInvestmentAccountInput, UserBankUncheckedCreateWithoutInvestmentAccountInput>
  }

  export type UserBankUpsertWithoutInvestmentAccountInput = {
    update: XOR<UserBankUpdateWithoutInvestmentAccountInput, UserBankUncheckedUpdateWithoutInvestmentAccountInput>
    create: XOR<UserBankCreateWithoutInvestmentAccountInput, UserBankUncheckedCreateWithoutInvestmentAccountInput>
    where?: UserBankWhereInput
  }

  export type UserBankUpdateToOneWithWhereWithoutInvestmentAccountInput = {
    where?: UserBankWhereInput
    data: XOR<UserBankUpdateWithoutInvestmentAccountInput, UserBankUncheckedUpdateWithoutInvestmentAccountInput>
  }

  export type UserBankUpdateWithoutInvestmentAccountInput = {
    accountNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserBanksNestedInput
    bank?: BankUpdateOneRequiredWithoutUserBanksNestedInput
    savingsAccount?: SavingsAccountUpdateOneWithoutUserBankNestedInput
    checkingsAccount?: CheckingsAccountUpdateOneWithoutUserBankNestedInput
  }

  export type UserBankUncheckedUpdateWithoutInvestmentAccountInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    bankId?: IntFieldUpdateOperationsInput | number
    accountNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    savingsAccount?: SavingsAccountUncheckedUpdateOneWithoutUserBankNestedInput
    checkingsAccount?: CheckingsAccountUncheckedUpdateOneWithoutUserBankNestedInput
  }

  export type UserBankCreateWithoutSavingsAccountInput = {
    accountNumber: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutUserBanksInput
    bank: BankCreateNestedOneWithoutUserBanksInput
    checkingsAccount?: CheckingsAccountCreateNestedOneWithoutUserBankInput
    investmentAccount?: InvestmentAccountCreateNestedOneWithoutUserBankInput
  }

  export type UserBankUncheckedCreateWithoutSavingsAccountInput = {
    id?: number
    userId: string
    bankId: number
    accountNumber: string
    createdAt?: Date | string
    updatedAt?: Date | string
    checkingsAccount?: CheckingsAccountUncheckedCreateNestedOneWithoutUserBankInput
    investmentAccount?: InvestmentAccountUncheckedCreateNestedOneWithoutUserBankInput
  }

  export type UserBankCreateOrConnectWithoutSavingsAccountInput = {
    where: UserBankWhereUniqueInput
    create: XOR<UserBankCreateWithoutSavingsAccountInput, UserBankUncheckedCreateWithoutSavingsAccountInput>
  }

  export type UserBankUpsertWithoutSavingsAccountInput = {
    update: XOR<UserBankUpdateWithoutSavingsAccountInput, UserBankUncheckedUpdateWithoutSavingsAccountInput>
    create: XOR<UserBankCreateWithoutSavingsAccountInput, UserBankUncheckedCreateWithoutSavingsAccountInput>
    where?: UserBankWhereInput
  }

  export type UserBankUpdateToOneWithWhereWithoutSavingsAccountInput = {
    where?: UserBankWhereInput
    data: XOR<UserBankUpdateWithoutSavingsAccountInput, UserBankUncheckedUpdateWithoutSavingsAccountInput>
  }

  export type UserBankUpdateWithoutSavingsAccountInput = {
    accountNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserBanksNestedInput
    bank?: BankUpdateOneRequiredWithoutUserBanksNestedInput
    checkingsAccount?: CheckingsAccountUpdateOneWithoutUserBankNestedInput
    investmentAccount?: InvestmentAccountUpdateOneWithoutUserBankNestedInput
  }

  export type UserBankUncheckedUpdateWithoutSavingsAccountInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    bankId?: IntFieldUpdateOperationsInput | number
    accountNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checkingsAccount?: CheckingsAccountUncheckedUpdateOneWithoutUserBankNestedInput
    investmentAccount?: InvestmentAccountUncheckedUpdateOneWithoutUserBankNestedInput
  }

  export type TransactionCreateWithoutCheckingsAccountInput = {
    amount: number
    date: Date | string
    description: string
    category: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionUncheckedCreateWithoutCheckingsAccountInput = {
    id?: number
    amount: number
    date: Date | string
    description: string
    category: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionCreateOrConnectWithoutCheckingsAccountInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutCheckingsAccountInput, TransactionUncheckedCreateWithoutCheckingsAccountInput>
  }

  export type TransactionCreateManyCheckingsAccountInputEnvelope = {
    data: TransactionCreateManyCheckingsAccountInput | TransactionCreateManyCheckingsAccountInput[]
    skipDuplicates?: boolean
  }

  export type UserBankCreateWithoutCheckingsAccountInput = {
    accountNumber: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutUserBanksInput
    bank: BankCreateNestedOneWithoutUserBanksInput
    savingsAccount?: SavingsAccountCreateNestedOneWithoutUserBankInput
    investmentAccount?: InvestmentAccountCreateNestedOneWithoutUserBankInput
  }

  export type UserBankUncheckedCreateWithoutCheckingsAccountInput = {
    id?: number
    userId: string
    bankId: number
    accountNumber: string
    createdAt?: Date | string
    updatedAt?: Date | string
    savingsAccount?: SavingsAccountUncheckedCreateNestedOneWithoutUserBankInput
    investmentAccount?: InvestmentAccountUncheckedCreateNestedOneWithoutUserBankInput
  }

  export type UserBankCreateOrConnectWithoutCheckingsAccountInput = {
    where: UserBankWhereUniqueInput
    create: XOR<UserBankCreateWithoutCheckingsAccountInput, UserBankUncheckedCreateWithoutCheckingsAccountInput>
  }

  export type TransactionUpsertWithWhereUniqueWithoutCheckingsAccountInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutCheckingsAccountInput, TransactionUncheckedUpdateWithoutCheckingsAccountInput>
    create: XOR<TransactionCreateWithoutCheckingsAccountInput, TransactionUncheckedCreateWithoutCheckingsAccountInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutCheckingsAccountInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutCheckingsAccountInput, TransactionUncheckedUpdateWithoutCheckingsAccountInput>
  }

  export type TransactionUpdateManyWithWhereWithoutCheckingsAccountInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutCheckingsAccountInput>
  }

  export type TransactionScalarWhereInput = {
    AND?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    OR?: TransactionScalarWhereInput[]
    NOT?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    id?: IntFilter<"Transaction"> | number
    amount?: FloatFilter<"Transaction"> | number
    date?: DateTimeFilter<"Transaction"> | Date | string
    description?: StringFilter<"Transaction"> | string
    category?: StringFilter<"Transaction"> | string
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    updatedAt?: DateTimeFilter<"Transaction"> | Date | string
    checkingsAccountId?: IntFilter<"Transaction"> | number
  }

  export type UserBankUpsertWithoutCheckingsAccountInput = {
    update: XOR<UserBankUpdateWithoutCheckingsAccountInput, UserBankUncheckedUpdateWithoutCheckingsAccountInput>
    create: XOR<UserBankCreateWithoutCheckingsAccountInput, UserBankUncheckedCreateWithoutCheckingsAccountInput>
    where?: UserBankWhereInput
  }

  export type UserBankUpdateToOneWithWhereWithoutCheckingsAccountInput = {
    where?: UserBankWhereInput
    data: XOR<UserBankUpdateWithoutCheckingsAccountInput, UserBankUncheckedUpdateWithoutCheckingsAccountInput>
  }

  export type UserBankUpdateWithoutCheckingsAccountInput = {
    accountNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserBanksNestedInput
    bank?: BankUpdateOneRequiredWithoutUserBanksNestedInput
    savingsAccount?: SavingsAccountUpdateOneWithoutUserBankNestedInput
    investmentAccount?: InvestmentAccountUpdateOneWithoutUserBankNestedInput
  }

  export type UserBankUncheckedUpdateWithoutCheckingsAccountInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    bankId?: IntFieldUpdateOperationsInput | number
    accountNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    savingsAccount?: SavingsAccountUncheckedUpdateOneWithoutUserBankNestedInput
    investmentAccount?: InvestmentAccountUncheckedUpdateOneWithoutUserBankNestedInput
  }

  export type CheckingsAccountCreateWithoutTransactionsInput = {
    balance?: number
    prevMonthsTransactionsSummary?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    userBank?: UserBankCreateNestedOneWithoutCheckingsAccountInput
  }

  export type CheckingsAccountUncheckedCreateWithoutTransactionsInput = {
    id?: number
    userBankId: number
    balance?: number
    prevMonthsTransactionsSummary?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CheckingsAccountCreateOrConnectWithoutTransactionsInput = {
    where: CheckingsAccountWhereUniqueInput
    create: XOR<CheckingsAccountCreateWithoutTransactionsInput, CheckingsAccountUncheckedCreateWithoutTransactionsInput>
  }

  export type CheckingsAccountUpsertWithoutTransactionsInput = {
    update: XOR<CheckingsAccountUpdateWithoutTransactionsInput, CheckingsAccountUncheckedUpdateWithoutTransactionsInput>
    create: XOR<CheckingsAccountCreateWithoutTransactionsInput, CheckingsAccountUncheckedCreateWithoutTransactionsInput>
    where?: CheckingsAccountWhereInput
  }

  export type CheckingsAccountUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: CheckingsAccountWhereInput
    data: XOR<CheckingsAccountUpdateWithoutTransactionsInput, CheckingsAccountUncheckedUpdateWithoutTransactionsInput>
  }

  export type CheckingsAccountUpdateWithoutTransactionsInput = {
    balance?: FloatFieldUpdateOperationsInput | number
    prevMonthsTransactionsSummary?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userBank?: UserBankUpdateOneWithoutCheckingsAccountNestedInput
  }

  export type CheckingsAccountUncheckedUpdateWithoutTransactionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userBankId?: IntFieldUpdateOperationsInput | number
    balance?: FloatFieldUpdateOperationsInput | number
    prevMonthsTransactionsSummary?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutPayablesInput = {
    id?: string
    name: string
    email: string
    cnic: string
    phone?: string
    password: string
    role?: $Enums.Role
    otp?: string | null
    resetToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userBanks?: UserBankCreateNestedManyWithoutUserInput
    SupportMessages?: SupportMessagesCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPayablesInput = {
    id?: string
    name: string
    email: string
    cnic: string
    phone?: string
    password: string
    role?: $Enums.Role
    otp?: string | null
    resetToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userBanks?: UserBankUncheckedCreateNestedManyWithoutUserInput
    SupportMessages?: SupportMessagesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPayablesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPayablesInput, UserUncheckedCreateWithoutPayablesInput>
  }

  export type UserUpsertWithoutPayablesInput = {
    update: XOR<UserUpdateWithoutPayablesInput, UserUncheckedUpdateWithoutPayablesInput>
    create: XOR<UserCreateWithoutPayablesInput, UserUncheckedCreateWithoutPayablesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPayablesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPayablesInput, UserUncheckedUpdateWithoutPayablesInput>
  }

  export type UserUpdateWithoutPayablesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cnic?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userBanks?: UserBankUpdateManyWithoutUserNestedInput
    SupportMessages?: SupportMessagesUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPayablesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cnic?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userBanks?: UserBankUncheckedUpdateManyWithoutUserNestedInput
    SupportMessages?: SupportMessagesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSupportMessagesInput = {
    id?: string
    name: string
    email: string
    cnic: string
    phone?: string
    password: string
    role?: $Enums.Role
    otp?: string | null
    resetToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userBanks?: UserBankCreateNestedManyWithoutUserInput
    Payables?: PayablesCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSupportMessagesInput = {
    id?: string
    name: string
    email: string
    cnic: string
    phone?: string
    password: string
    role?: $Enums.Role
    otp?: string | null
    resetToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userBanks?: UserBankUncheckedCreateNestedManyWithoutUserInput
    Payables?: PayablesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSupportMessagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSupportMessagesInput, UserUncheckedCreateWithoutSupportMessagesInput>
  }

  export type UserUpsertWithoutSupportMessagesInput = {
    update: XOR<UserUpdateWithoutSupportMessagesInput, UserUncheckedUpdateWithoutSupportMessagesInput>
    create: XOR<UserCreateWithoutSupportMessagesInput, UserUncheckedCreateWithoutSupportMessagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSupportMessagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSupportMessagesInput, UserUncheckedUpdateWithoutSupportMessagesInput>
  }

  export type UserUpdateWithoutSupportMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cnic?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userBanks?: UserBankUpdateManyWithoutUserNestedInput
    Payables?: PayablesUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSupportMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cnic?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userBanks?: UserBankUncheckedUpdateManyWithoutUserNestedInput
    Payables?: PayablesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserBankCreateManyUserInput = {
    id?: number
    bankId: number
    accountNumber: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PayablesCreateManyUserInput = {
    id?: number
    title: string
    total: number
    priority: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SupportMessagesCreateManyUserInput = {
    id?: number
    message: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserBankUpdateWithoutUserInput = {
    accountNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bank?: BankUpdateOneRequiredWithoutUserBanksNestedInput
    savingsAccount?: SavingsAccountUpdateOneWithoutUserBankNestedInput
    checkingsAccount?: CheckingsAccountUpdateOneWithoutUserBankNestedInput
    investmentAccount?: InvestmentAccountUpdateOneWithoutUserBankNestedInput
  }

  export type UserBankUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    bankId?: IntFieldUpdateOperationsInput | number
    accountNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    savingsAccount?: SavingsAccountUncheckedUpdateOneWithoutUserBankNestedInput
    checkingsAccount?: CheckingsAccountUncheckedUpdateOneWithoutUserBankNestedInput
    investmentAccount?: InvestmentAccountUncheckedUpdateOneWithoutUserBankNestedInput
  }

  export type UserBankUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    bankId?: IntFieldUpdateOperationsInput | number
    accountNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PayablesUpdateWithoutUserInput = {
    title?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    priority?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PayablesUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    priority?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PayablesUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    priority?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupportMessagesUpdateWithoutUserInput = {
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupportMessagesUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupportMessagesUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserBankCreateManyBankInput = {
    id?: number
    userId: string
    accountNumber: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserBankUpdateWithoutBankInput = {
    accountNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserBanksNestedInput
    savingsAccount?: SavingsAccountUpdateOneWithoutUserBankNestedInput
    checkingsAccount?: CheckingsAccountUpdateOneWithoutUserBankNestedInput
    investmentAccount?: InvestmentAccountUpdateOneWithoutUserBankNestedInput
  }

  export type UserBankUncheckedUpdateWithoutBankInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    savingsAccount?: SavingsAccountUncheckedUpdateOneWithoutUserBankNestedInput
    checkingsAccount?: CheckingsAccountUncheckedUpdateOneWithoutUserBankNestedInput
    investmentAccount?: InvestmentAccountUncheckedUpdateOneWithoutUserBankNestedInput
  }

  export type UserBankUncheckedUpdateManyWithoutBankInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateManyCheckingsAccountInput = {
    id?: number
    amount: number
    date: Date | string
    description: string
    category: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionUpdateWithoutCheckingsAccountInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateWithoutCheckingsAccountInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyWithoutCheckingsAccountInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}