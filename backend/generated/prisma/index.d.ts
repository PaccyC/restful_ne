
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
 * Model Parking
 * 
 */
export type Parking = $Result.DefaultSelection<Prisma.$ParkingPayload>
/**
 * Model CarMovement
 * 
 */
export type CarMovement = $Result.DefaultSelection<Prisma.$CarMovementPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const EROLE: {
  ADMIN: 'ADMIN',
  ATTENDANT: 'ATTENDANT'
};

export type EROLE = (typeof EROLE)[keyof typeof EROLE]

}

export type EROLE = $Enums.EROLE

export const EROLE: typeof $Enums.EROLE

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
   * `prisma.parking`: Exposes CRUD operations for the **Parking** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Parkings
    * const parkings = await prisma.parking.findMany()
    * ```
    */
  get parking(): Prisma.ParkingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.carMovement`: Exposes CRUD operations for the **CarMovement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CarMovements
    * const carMovements = await prisma.carMovement.findMany()
    * ```
    */
  get carMovement(): Prisma.CarMovementDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
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
    Parking: 'Parking',
    CarMovement: 'CarMovement'
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
      modelProps: "user" | "parking" | "carMovement"
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
      Parking: {
        payload: Prisma.$ParkingPayload<ExtArgs>
        fields: Prisma.ParkingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ParkingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ParkingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingPayload>
          }
          findFirst: {
            args: Prisma.ParkingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ParkingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingPayload>
          }
          findMany: {
            args: Prisma.ParkingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingPayload>[]
          }
          create: {
            args: Prisma.ParkingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingPayload>
          }
          createMany: {
            args: Prisma.ParkingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ParkingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingPayload>[]
          }
          delete: {
            args: Prisma.ParkingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingPayload>
          }
          update: {
            args: Prisma.ParkingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingPayload>
          }
          deleteMany: {
            args: Prisma.ParkingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ParkingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ParkingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingPayload>[]
          }
          upsert: {
            args: Prisma.ParkingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingPayload>
          }
          aggregate: {
            args: Prisma.ParkingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateParking>
          }
          groupBy: {
            args: Prisma.ParkingGroupByArgs<ExtArgs>
            result: $Utils.Optional<ParkingGroupByOutputType>[]
          }
          count: {
            args: Prisma.ParkingCountArgs<ExtArgs>
            result: $Utils.Optional<ParkingCountAggregateOutputType> | number
          }
        }
      }
      CarMovement: {
        payload: Prisma.$CarMovementPayload<ExtArgs>
        fields: Prisma.CarMovementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CarMovementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarMovementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CarMovementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarMovementPayload>
          }
          findFirst: {
            args: Prisma.CarMovementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarMovementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CarMovementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarMovementPayload>
          }
          findMany: {
            args: Prisma.CarMovementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarMovementPayload>[]
          }
          create: {
            args: Prisma.CarMovementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarMovementPayload>
          }
          createMany: {
            args: Prisma.CarMovementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CarMovementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarMovementPayload>[]
          }
          delete: {
            args: Prisma.CarMovementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarMovementPayload>
          }
          update: {
            args: Prisma.CarMovementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarMovementPayload>
          }
          deleteMany: {
            args: Prisma.CarMovementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CarMovementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CarMovementUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarMovementPayload>[]
          }
          upsert: {
            args: Prisma.CarMovementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarMovementPayload>
          }
          aggregate: {
            args: Prisma.CarMovementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCarMovement>
          }
          groupBy: {
            args: Prisma.CarMovementGroupByArgs<ExtArgs>
            result: $Utils.Optional<CarMovementGroupByOutputType>[]
          }
          count: {
            args: Prisma.CarMovementCountArgs<ExtArgs>
            result: $Utils.Optional<CarMovementCountAggregateOutputType> | number
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
    parking?: ParkingOmit
    carMovement?: CarMovementOmit
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
    parking: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parking?: boolean | UserCountOutputTypeCountParkingArgs
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
  export type UserCountOutputTypeCountParkingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParkingWhereInput
  }


  /**
   * Count Type ParkingCountOutputType
   */

  export type ParkingCountOutputType = {
    carMovement: number
  }

  export type ParkingCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carMovement?: boolean | ParkingCountOutputTypeCountCarMovementArgs
  }

  // Custom InputTypes
  /**
   * ParkingCountOutputType without action
   */
  export type ParkingCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingCountOutputType
     */
    select?: ParkingCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ParkingCountOutputType without action
   */
  export type ParkingCountOutputTypeCountCarMovementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CarMovementWhereInput
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
    firstName: string | null
    lastName: string | null
    email: string | null
    password: string | null
    role: $Enums.EROLE | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    password: string | null
    role: $Enums.EROLE | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    email: number
    password: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    password?: true
    role?: true
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
    firstName: string
    lastName: string
    email: string
    password: string
    role: $Enums.EROLE
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
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    parking?: boolean | User$parkingArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "lastName" | "email" | "password" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parking?: boolean | User$parkingArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      parking: Prisma.$ParkingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      firstName: string
      lastName: string
      email: string
      password: string
      role: $Enums.EROLE
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
    parking<T extends User$parkingArgs<ExtArgs> = {}>(args?: Subset<T, User$parkingArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParkingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'EROLE'>
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
   * User.parking
   */
  export type User$parkingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parking
     */
    select?: ParkingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parking
     */
    omit?: ParkingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingInclude<ExtArgs> | null
    where?: ParkingWhereInput
    orderBy?: ParkingOrderByWithRelationInput | ParkingOrderByWithRelationInput[]
    cursor?: ParkingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParkingScalarFieldEnum | ParkingScalarFieldEnum[]
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
   * Model Parking
   */

  export type AggregateParking = {
    _count: ParkingCountAggregateOutputType | null
    _avg: ParkingAvgAggregateOutputType | null
    _sum: ParkingSumAggregateOutputType | null
    _min: ParkingMinAggregateOutputType | null
    _max: ParkingMaxAggregateOutputType | null
  }

  export type ParkingAvgAggregateOutputType = {
    availableSpaces: number | null
    chargingFeePerHour: number | null
  }

  export type ParkingSumAggregateOutputType = {
    availableSpaces: number | null
    chargingFeePerHour: number | null
  }

  export type ParkingMinAggregateOutputType = {
    code: string | null
    parkingName: string | null
    availableSpaces: number | null
    location: string | null
    chargingFeePerHour: number | null
    userId: string | null
  }

  export type ParkingMaxAggregateOutputType = {
    code: string | null
    parkingName: string | null
    availableSpaces: number | null
    location: string | null
    chargingFeePerHour: number | null
    userId: string | null
  }

  export type ParkingCountAggregateOutputType = {
    code: number
    parkingName: number
    availableSpaces: number
    location: number
    chargingFeePerHour: number
    userId: number
    _all: number
  }


  export type ParkingAvgAggregateInputType = {
    availableSpaces?: true
    chargingFeePerHour?: true
  }

  export type ParkingSumAggregateInputType = {
    availableSpaces?: true
    chargingFeePerHour?: true
  }

  export type ParkingMinAggregateInputType = {
    code?: true
    parkingName?: true
    availableSpaces?: true
    location?: true
    chargingFeePerHour?: true
    userId?: true
  }

  export type ParkingMaxAggregateInputType = {
    code?: true
    parkingName?: true
    availableSpaces?: true
    location?: true
    chargingFeePerHour?: true
    userId?: true
  }

  export type ParkingCountAggregateInputType = {
    code?: true
    parkingName?: true
    availableSpaces?: true
    location?: true
    chargingFeePerHour?: true
    userId?: true
    _all?: true
  }

  export type ParkingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Parking to aggregate.
     */
    where?: ParkingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parkings to fetch.
     */
    orderBy?: ParkingOrderByWithRelationInput | ParkingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ParkingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parkings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parkings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Parkings
    **/
    _count?: true | ParkingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ParkingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ParkingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ParkingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ParkingMaxAggregateInputType
  }

  export type GetParkingAggregateType<T extends ParkingAggregateArgs> = {
        [P in keyof T & keyof AggregateParking]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParking[P]>
      : GetScalarType<T[P], AggregateParking[P]>
  }




  export type ParkingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParkingWhereInput
    orderBy?: ParkingOrderByWithAggregationInput | ParkingOrderByWithAggregationInput[]
    by: ParkingScalarFieldEnum[] | ParkingScalarFieldEnum
    having?: ParkingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ParkingCountAggregateInputType | true
    _avg?: ParkingAvgAggregateInputType
    _sum?: ParkingSumAggregateInputType
    _min?: ParkingMinAggregateInputType
    _max?: ParkingMaxAggregateInputType
  }

  export type ParkingGroupByOutputType = {
    code: string
    parkingName: string
    availableSpaces: number
    location: string
    chargingFeePerHour: number
    userId: string
    _count: ParkingCountAggregateOutputType | null
    _avg: ParkingAvgAggregateOutputType | null
    _sum: ParkingSumAggregateOutputType | null
    _min: ParkingMinAggregateOutputType | null
    _max: ParkingMaxAggregateOutputType | null
  }

  type GetParkingGroupByPayload<T extends ParkingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ParkingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ParkingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ParkingGroupByOutputType[P]>
            : GetScalarType<T[P], ParkingGroupByOutputType[P]>
        }
      >
    >


  export type ParkingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    code?: boolean
    parkingName?: boolean
    availableSpaces?: boolean
    location?: boolean
    chargingFeePerHour?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    carMovement?: boolean | Parking$carMovementArgs<ExtArgs>
    _count?: boolean | ParkingCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parking"]>

  export type ParkingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    code?: boolean
    parkingName?: boolean
    availableSpaces?: boolean
    location?: boolean
    chargingFeePerHour?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parking"]>

  export type ParkingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    code?: boolean
    parkingName?: boolean
    availableSpaces?: boolean
    location?: boolean
    chargingFeePerHour?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parking"]>

  export type ParkingSelectScalar = {
    code?: boolean
    parkingName?: boolean
    availableSpaces?: boolean
    location?: boolean
    chargingFeePerHour?: boolean
    userId?: boolean
  }

  export type ParkingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"code" | "parkingName" | "availableSpaces" | "location" | "chargingFeePerHour" | "userId", ExtArgs["result"]["parking"]>
  export type ParkingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    carMovement?: boolean | Parking$carMovementArgs<ExtArgs>
    _count?: boolean | ParkingCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ParkingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ParkingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ParkingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Parking"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      carMovement: Prisma.$CarMovementPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      code: string
      parkingName: string
      availableSpaces: number
      location: string
      chargingFeePerHour: number
      userId: string
    }, ExtArgs["result"]["parking"]>
    composites: {}
  }

  type ParkingGetPayload<S extends boolean | null | undefined | ParkingDefaultArgs> = $Result.GetResult<Prisma.$ParkingPayload, S>

  type ParkingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ParkingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ParkingCountAggregateInputType | true
    }

  export interface ParkingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Parking'], meta: { name: 'Parking' } }
    /**
     * Find zero or one Parking that matches the filter.
     * @param {ParkingFindUniqueArgs} args - Arguments to find a Parking
     * @example
     * // Get one Parking
     * const parking = await prisma.parking.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ParkingFindUniqueArgs>(args: SelectSubset<T, ParkingFindUniqueArgs<ExtArgs>>): Prisma__ParkingClient<$Result.GetResult<Prisma.$ParkingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Parking that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ParkingFindUniqueOrThrowArgs} args - Arguments to find a Parking
     * @example
     * // Get one Parking
     * const parking = await prisma.parking.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ParkingFindUniqueOrThrowArgs>(args: SelectSubset<T, ParkingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ParkingClient<$Result.GetResult<Prisma.$ParkingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Parking that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingFindFirstArgs} args - Arguments to find a Parking
     * @example
     * // Get one Parking
     * const parking = await prisma.parking.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ParkingFindFirstArgs>(args?: SelectSubset<T, ParkingFindFirstArgs<ExtArgs>>): Prisma__ParkingClient<$Result.GetResult<Prisma.$ParkingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Parking that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingFindFirstOrThrowArgs} args - Arguments to find a Parking
     * @example
     * // Get one Parking
     * const parking = await prisma.parking.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ParkingFindFirstOrThrowArgs>(args?: SelectSubset<T, ParkingFindFirstOrThrowArgs<ExtArgs>>): Prisma__ParkingClient<$Result.GetResult<Prisma.$ParkingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Parkings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Parkings
     * const parkings = await prisma.parking.findMany()
     * 
     * // Get first 10 Parkings
     * const parkings = await prisma.parking.findMany({ take: 10 })
     * 
     * // Only select the `code`
     * const parkingWithCodeOnly = await prisma.parking.findMany({ select: { code: true } })
     * 
     */
    findMany<T extends ParkingFindManyArgs>(args?: SelectSubset<T, ParkingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParkingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Parking.
     * @param {ParkingCreateArgs} args - Arguments to create a Parking.
     * @example
     * // Create one Parking
     * const Parking = await prisma.parking.create({
     *   data: {
     *     // ... data to create a Parking
     *   }
     * })
     * 
     */
    create<T extends ParkingCreateArgs>(args: SelectSubset<T, ParkingCreateArgs<ExtArgs>>): Prisma__ParkingClient<$Result.GetResult<Prisma.$ParkingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Parkings.
     * @param {ParkingCreateManyArgs} args - Arguments to create many Parkings.
     * @example
     * // Create many Parkings
     * const parking = await prisma.parking.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ParkingCreateManyArgs>(args?: SelectSubset<T, ParkingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Parkings and returns the data saved in the database.
     * @param {ParkingCreateManyAndReturnArgs} args - Arguments to create many Parkings.
     * @example
     * // Create many Parkings
     * const parking = await prisma.parking.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Parkings and only return the `code`
     * const parkingWithCodeOnly = await prisma.parking.createManyAndReturn({
     *   select: { code: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ParkingCreateManyAndReturnArgs>(args?: SelectSubset<T, ParkingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParkingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Parking.
     * @param {ParkingDeleteArgs} args - Arguments to delete one Parking.
     * @example
     * // Delete one Parking
     * const Parking = await prisma.parking.delete({
     *   where: {
     *     // ... filter to delete one Parking
     *   }
     * })
     * 
     */
    delete<T extends ParkingDeleteArgs>(args: SelectSubset<T, ParkingDeleteArgs<ExtArgs>>): Prisma__ParkingClient<$Result.GetResult<Prisma.$ParkingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Parking.
     * @param {ParkingUpdateArgs} args - Arguments to update one Parking.
     * @example
     * // Update one Parking
     * const parking = await prisma.parking.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ParkingUpdateArgs>(args: SelectSubset<T, ParkingUpdateArgs<ExtArgs>>): Prisma__ParkingClient<$Result.GetResult<Prisma.$ParkingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Parkings.
     * @param {ParkingDeleteManyArgs} args - Arguments to filter Parkings to delete.
     * @example
     * // Delete a few Parkings
     * const { count } = await prisma.parking.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ParkingDeleteManyArgs>(args?: SelectSubset<T, ParkingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Parkings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Parkings
     * const parking = await prisma.parking.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ParkingUpdateManyArgs>(args: SelectSubset<T, ParkingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Parkings and returns the data updated in the database.
     * @param {ParkingUpdateManyAndReturnArgs} args - Arguments to update many Parkings.
     * @example
     * // Update many Parkings
     * const parking = await prisma.parking.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Parkings and only return the `code`
     * const parkingWithCodeOnly = await prisma.parking.updateManyAndReturn({
     *   select: { code: true },
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
    updateManyAndReturn<T extends ParkingUpdateManyAndReturnArgs>(args: SelectSubset<T, ParkingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParkingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Parking.
     * @param {ParkingUpsertArgs} args - Arguments to update or create a Parking.
     * @example
     * // Update or create a Parking
     * const parking = await prisma.parking.upsert({
     *   create: {
     *     // ... data to create a Parking
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Parking we want to update
     *   }
     * })
     */
    upsert<T extends ParkingUpsertArgs>(args: SelectSubset<T, ParkingUpsertArgs<ExtArgs>>): Prisma__ParkingClient<$Result.GetResult<Prisma.$ParkingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Parkings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingCountArgs} args - Arguments to filter Parkings to count.
     * @example
     * // Count the number of Parkings
     * const count = await prisma.parking.count({
     *   where: {
     *     // ... the filter for the Parkings we want to count
     *   }
     * })
    **/
    count<T extends ParkingCountArgs>(
      args?: Subset<T, ParkingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ParkingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Parking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ParkingAggregateArgs>(args: Subset<T, ParkingAggregateArgs>): Prisma.PrismaPromise<GetParkingAggregateType<T>>

    /**
     * Group by Parking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingGroupByArgs} args - Group by arguments.
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
      T extends ParkingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ParkingGroupByArgs['orderBy'] }
        : { orderBy?: ParkingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ParkingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParkingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Parking model
   */
  readonly fields: ParkingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Parking.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ParkingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    carMovement<T extends Parking$carMovementArgs<ExtArgs> = {}>(args?: Subset<T, Parking$carMovementArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarMovementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Parking model
   */
  interface ParkingFieldRefs {
    readonly code: FieldRef<"Parking", 'String'>
    readonly parkingName: FieldRef<"Parking", 'String'>
    readonly availableSpaces: FieldRef<"Parking", 'Int'>
    readonly location: FieldRef<"Parking", 'String'>
    readonly chargingFeePerHour: FieldRef<"Parking", 'Float'>
    readonly userId: FieldRef<"Parking", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Parking findUnique
   */
  export type ParkingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parking
     */
    select?: ParkingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parking
     */
    omit?: ParkingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingInclude<ExtArgs> | null
    /**
     * Filter, which Parking to fetch.
     */
    where: ParkingWhereUniqueInput
  }

  /**
   * Parking findUniqueOrThrow
   */
  export type ParkingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parking
     */
    select?: ParkingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parking
     */
    omit?: ParkingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingInclude<ExtArgs> | null
    /**
     * Filter, which Parking to fetch.
     */
    where: ParkingWhereUniqueInput
  }

  /**
   * Parking findFirst
   */
  export type ParkingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parking
     */
    select?: ParkingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parking
     */
    omit?: ParkingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingInclude<ExtArgs> | null
    /**
     * Filter, which Parking to fetch.
     */
    where?: ParkingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parkings to fetch.
     */
    orderBy?: ParkingOrderByWithRelationInput | ParkingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Parkings.
     */
    cursor?: ParkingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parkings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parkings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Parkings.
     */
    distinct?: ParkingScalarFieldEnum | ParkingScalarFieldEnum[]
  }

  /**
   * Parking findFirstOrThrow
   */
  export type ParkingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parking
     */
    select?: ParkingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parking
     */
    omit?: ParkingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingInclude<ExtArgs> | null
    /**
     * Filter, which Parking to fetch.
     */
    where?: ParkingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parkings to fetch.
     */
    orderBy?: ParkingOrderByWithRelationInput | ParkingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Parkings.
     */
    cursor?: ParkingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parkings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parkings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Parkings.
     */
    distinct?: ParkingScalarFieldEnum | ParkingScalarFieldEnum[]
  }

  /**
   * Parking findMany
   */
  export type ParkingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parking
     */
    select?: ParkingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parking
     */
    omit?: ParkingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingInclude<ExtArgs> | null
    /**
     * Filter, which Parkings to fetch.
     */
    where?: ParkingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parkings to fetch.
     */
    orderBy?: ParkingOrderByWithRelationInput | ParkingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Parkings.
     */
    cursor?: ParkingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parkings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parkings.
     */
    skip?: number
    distinct?: ParkingScalarFieldEnum | ParkingScalarFieldEnum[]
  }

  /**
   * Parking create
   */
  export type ParkingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parking
     */
    select?: ParkingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parking
     */
    omit?: ParkingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingInclude<ExtArgs> | null
    /**
     * The data needed to create a Parking.
     */
    data: XOR<ParkingCreateInput, ParkingUncheckedCreateInput>
  }

  /**
   * Parking createMany
   */
  export type ParkingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Parkings.
     */
    data: ParkingCreateManyInput | ParkingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Parking createManyAndReturn
   */
  export type ParkingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parking
     */
    select?: ParkingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Parking
     */
    omit?: ParkingOmit<ExtArgs> | null
    /**
     * The data used to create many Parkings.
     */
    data: ParkingCreateManyInput | ParkingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Parking update
   */
  export type ParkingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parking
     */
    select?: ParkingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parking
     */
    omit?: ParkingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingInclude<ExtArgs> | null
    /**
     * The data needed to update a Parking.
     */
    data: XOR<ParkingUpdateInput, ParkingUncheckedUpdateInput>
    /**
     * Choose, which Parking to update.
     */
    where: ParkingWhereUniqueInput
  }

  /**
   * Parking updateMany
   */
  export type ParkingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Parkings.
     */
    data: XOR<ParkingUpdateManyMutationInput, ParkingUncheckedUpdateManyInput>
    /**
     * Filter which Parkings to update
     */
    where?: ParkingWhereInput
    /**
     * Limit how many Parkings to update.
     */
    limit?: number
  }

  /**
   * Parking updateManyAndReturn
   */
  export type ParkingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parking
     */
    select?: ParkingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Parking
     */
    omit?: ParkingOmit<ExtArgs> | null
    /**
     * The data used to update Parkings.
     */
    data: XOR<ParkingUpdateManyMutationInput, ParkingUncheckedUpdateManyInput>
    /**
     * Filter which Parkings to update
     */
    where?: ParkingWhereInput
    /**
     * Limit how many Parkings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Parking upsert
   */
  export type ParkingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parking
     */
    select?: ParkingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parking
     */
    omit?: ParkingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingInclude<ExtArgs> | null
    /**
     * The filter to search for the Parking to update in case it exists.
     */
    where: ParkingWhereUniqueInput
    /**
     * In case the Parking found by the `where` argument doesn't exist, create a new Parking with this data.
     */
    create: XOR<ParkingCreateInput, ParkingUncheckedCreateInput>
    /**
     * In case the Parking was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ParkingUpdateInput, ParkingUncheckedUpdateInput>
  }

  /**
   * Parking delete
   */
  export type ParkingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parking
     */
    select?: ParkingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parking
     */
    omit?: ParkingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingInclude<ExtArgs> | null
    /**
     * Filter which Parking to delete.
     */
    where: ParkingWhereUniqueInput
  }

  /**
   * Parking deleteMany
   */
  export type ParkingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Parkings to delete
     */
    where?: ParkingWhereInput
    /**
     * Limit how many Parkings to delete.
     */
    limit?: number
  }

  /**
   * Parking.carMovement
   */
  export type Parking$carMovementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarMovement
     */
    select?: CarMovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarMovement
     */
    omit?: CarMovementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarMovementInclude<ExtArgs> | null
    where?: CarMovementWhereInput
    orderBy?: CarMovementOrderByWithRelationInput | CarMovementOrderByWithRelationInput[]
    cursor?: CarMovementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CarMovementScalarFieldEnum | CarMovementScalarFieldEnum[]
  }

  /**
   * Parking without action
   */
  export type ParkingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parking
     */
    select?: ParkingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parking
     */
    omit?: ParkingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingInclude<ExtArgs> | null
  }


  /**
   * Model CarMovement
   */

  export type AggregateCarMovement = {
    _count: CarMovementCountAggregateOutputType | null
    _avg: CarMovementAvgAggregateOutputType | null
    _sum: CarMovementSumAggregateOutputType | null
    _min: CarMovementMinAggregateOutputType | null
    _max: CarMovementMaxAggregateOutputType | null
  }

  export type CarMovementAvgAggregateOutputType = {
    chargedAmount: number | null
  }

  export type CarMovementSumAggregateOutputType = {
    chargedAmount: number | null
  }

  export type CarMovementMinAggregateOutputType = {
    id: string | null
    plateNumber: string | null
    parkingCode: string | null
    entryDateTime: Date | null
    exitDateTime: Date | null
    chargedAmount: number | null
  }

  export type CarMovementMaxAggregateOutputType = {
    id: string | null
    plateNumber: string | null
    parkingCode: string | null
    entryDateTime: Date | null
    exitDateTime: Date | null
    chargedAmount: number | null
  }

  export type CarMovementCountAggregateOutputType = {
    id: number
    plateNumber: number
    parkingCode: number
    entryDateTime: number
    exitDateTime: number
    chargedAmount: number
    _all: number
  }


  export type CarMovementAvgAggregateInputType = {
    chargedAmount?: true
  }

  export type CarMovementSumAggregateInputType = {
    chargedAmount?: true
  }

  export type CarMovementMinAggregateInputType = {
    id?: true
    plateNumber?: true
    parkingCode?: true
    entryDateTime?: true
    exitDateTime?: true
    chargedAmount?: true
  }

  export type CarMovementMaxAggregateInputType = {
    id?: true
    plateNumber?: true
    parkingCode?: true
    entryDateTime?: true
    exitDateTime?: true
    chargedAmount?: true
  }

  export type CarMovementCountAggregateInputType = {
    id?: true
    plateNumber?: true
    parkingCode?: true
    entryDateTime?: true
    exitDateTime?: true
    chargedAmount?: true
    _all?: true
  }

  export type CarMovementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CarMovement to aggregate.
     */
    where?: CarMovementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CarMovements to fetch.
     */
    orderBy?: CarMovementOrderByWithRelationInput | CarMovementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CarMovementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CarMovements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CarMovements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CarMovements
    **/
    _count?: true | CarMovementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CarMovementAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CarMovementSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CarMovementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CarMovementMaxAggregateInputType
  }

  export type GetCarMovementAggregateType<T extends CarMovementAggregateArgs> = {
        [P in keyof T & keyof AggregateCarMovement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCarMovement[P]>
      : GetScalarType<T[P], AggregateCarMovement[P]>
  }




  export type CarMovementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CarMovementWhereInput
    orderBy?: CarMovementOrderByWithAggregationInput | CarMovementOrderByWithAggregationInput[]
    by: CarMovementScalarFieldEnum[] | CarMovementScalarFieldEnum
    having?: CarMovementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CarMovementCountAggregateInputType | true
    _avg?: CarMovementAvgAggregateInputType
    _sum?: CarMovementSumAggregateInputType
    _min?: CarMovementMinAggregateInputType
    _max?: CarMovementMaxAggregateInputType
  }

  export type CarMovementGroupByOutputType = {
    id: string
    plateNumber: string
    parkingCode: string
    entryDateTime: Date
    exitDateTime: Date
    chargedAmount: number
    _count: CarMovementCountAggregateOutputType | null
    _avg: CarMovementAvgAggregateOutputType | null
    _sum: CarMovementSumAggregateOutputType | null
    _min: CarMovementMinAggregateOutputType | null
    _max: CarMovementMaxAggregateOutputType | null
  }

  type GetCarMovementGroupByPayload<T extends CarMovementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CarMovementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CarMovementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CarMovementGroupByOutputType[P]>
            : GetScalarType<T[P], CarMovementGroupByOutputType[P]>
        }
      >
    >


  export type CarMovementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    plateNumber?: boolean
    parkingCode?: boolean
    entryDateTime?: boolean
    exitDateTime?: boolean
    chargedAmount?: boolean
    parking?: boolean | ParkingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["carMovement"]>

  export type CarMovementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    plateNumber?: boolean
    parkingCode?: boolean
    entryDateTime?: boolean
    exitDateTime?: boolean
    chargedAmount?: boolean
    parking?: boolean | ParkingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["carMovement"]>

  export type CarMovementSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    plateNumber?: boolean
    parkingCode?: boolean
    entryDateTime?: boolean
    exitDateTime?: boolean
    chargedAmount?: boolean
    parking?: boolean | ParkingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["carMovement"]>

  export type CarMovementSelectScalar = {
    id?: boolean
    plateNumber?: boolean
    parkingCode?: boolean
    entryDateTime?: boolean
    exitDateTime?: boolean
    chargedAmount?: boolean
  }

  export type CarMovementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "plateNumber" | "parkingCode" | "entryDateTime" | "exitDateTime" | "chargedAmount", ExtArgs["result"]["carMovement"]>
  export type CarMovementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parking?: boolean | ParkingDefaultArgs<ExtArgs>
  }
  export type CarMovementIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parking?: boolean | ParkingDefaultArgs<ExtArgs>
  }
  export type CarMovementIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parking?: boolean | ParkingDefaultArgs<ExtArgs>
  }

  export type $CarMovementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CarMovement"
    objects: {
      parking: Prisma.$ParkingPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      plateNumber: string
      parkingCode: string
      entryDateTime: Date
      exitDateTime: Date
      chargedAmount: number
    }, ExtArgs["result"]["carMovement"]>
    composites: {}
  }

  type CarMovementGetPayload<S extends boolean | null | undefined | CarMovementDefaultArgs> = $Result.GetResult<Prisma.$CarMovementPayload, S>

  type CarMovementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CarMovementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CarMovementCountAggregateInputType | true
    }

  export interface CarMovementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CarMovement'], meta: { name: 'CarMovement' } }
    /**
     * Find zero or one CarMovement that matches the filter.
     * @param {CarMovementFindUniqueArgs} args - Arguments to find a CarMovement
     * @example
     * // Get one CarMovement
     * const carMovement = await prisma.carMovement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CarMovementFindUniqueArgs>(args: SelectSubset<T, CarMovementFindUniqueArgs<ExtArgs>>): Prisma__CarMovementClient<$Result.GetResult<Prisma.$CarMovementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CarMovement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CarMovementFindUniqueOrThrowArgs} args - Arguments to find a CarMovement
     * @example
     * // Get one CarMovement
     * const carMovement = await prisma.carMovement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CarMovementFindUniqueOrThrowArgs>(args: SelectSubset<T, CarMovementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CarMovementClient<$Result.GetResult<Prisma.$CarMovementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CarMovement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarMovementFindFirstArgs} args - Arguments to find a CarMovement
     * @example
     * // Get one CarMovement
     * const carMovement = await prisma.carMovement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CarMovementFindFirstArgs>(args?: SelectSubset<T, CarMovementFindFirstArgs<ExtArgs>>): Prisma__CarMovementClient<$Result.GetResult<Prisma.$CarMovementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CarMovement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarMovementFindFirstOrThrowArgs} args - Arguments to find a CarMovement
     * @example
     * // Get one CarMovement
     * const carMovement = await prisma.carMovement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CarMovementFindFirstOrThrowArgs>(args?: SelectSubset<T, CarMovementFindFirstOrThrowArgs<ExtArgs>>): Prisma__CarMovementClient<$Result.GetResult<Prisma.$CarMovementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CarMovements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarMovementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CarMovements
     * const carMovements = await prisma.carMovement.findMany()
     * 
     * // Get first 10 CarMovements
     * const carMovements = await prisma.carMovement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const carMovementWithIdOnly = await prisma.carMovement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CarMovementFindManyArgs>(args?: SelectSubset<T, CarMovementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarMovementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CarMovement.
     * @param {CarMovementCreateArgs} args - Arguments to create a CarMovement.
     * @example
     * // Create one CarMovement
     * const CarMovement = await prisma.carMovement.create({
     *   data: {
     *     // ... data to create a CarMovement
     *   }
     * })
     * 
     */
    create<T extends CarMovementCreateArgs>(args: SelectSubset<T, CarMovementCreateArgs<ExtArgs>>): Prisma__CarMovementClient<$Result.GetResult<Prisma.$CarMovementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CarMovements.
     * @param {CarMovementCreateManyArgs} args - Arguments to create many CarMovements.
     * @example
     * // Create many CarMovements
     * const carMovement = await prisma.carMovement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CarMovementCreateManyArgs>(args?: SelectSubset<T, CarMovementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CarMovements and returns the data saved in the database.
     * @param {CarMovementCreateManyAndReturnArgs} args - Arguments to create many CarMovements.
     * @example
     * // Create many CarMovements
     * const carMovement = await prisma.carMovement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CarMovements and only return the `id`
     * const carMovementWithIdOnly = await prisma.carMovement.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CarMovementCreateManyAndReturnArgs>(args?: SelectSubset<T, CarMovementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarMovementPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CarMovement.
     * @param {CarMovementDeleteArgs} args - Arguments to delete one CarMovement.
     * @example
     * // Delete one CarMovement
     * const CarMovement = await prisma.carMovement.delete({
     *   where: {
     *     // ... filter to delete one CarMovement
     *   }
     * })
     * 
     */
    delete<T extends CarMovementDeleteArgs>(args: SelectSubset<T, CarMovementDeleteArgs<ExtArgs>>): Prisma__CarMovementClient<$Result.GetResult<Prisma.$CarMovementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CarMovement.
     * @param {CarMovementUpdateArgs} args - Arguments to update one CarMovement.
     * @example
     * // Update one CarMovement
     * const carMovement = await prisma.carMovement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CarMovementUpdateArgs>(args: SelectSubset<T, CarMovementUpdateArgs<ExtArgs>>): Prisma__CarMovementClient<$Result.GetResult<Prisma.$CarMovementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CarMovements.
     * @param {CarMovementDeleteManyArgs} args - Arguments to filter CarMovements to delete.
     * @example
     * // Delete a few CarMovements
     * const { count } = await prisma.carMovement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CarMovementDeleteManyArgs>(args?: SelectSubset<T, CarMovementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CarMovements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarMovementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CarMovements
     * const carMovement = await prisma.carMovement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CarMovementUpdateManyArgs>(args: SelectSubset<T, CarMovementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CarMovements and returns the data updated in the database.
     * @param {CarMovementUpdateManyAndReturnArgs} args - Arguments to update many CarMovements.
     * @example
     * // Update many CarMovements
     * const carMovement = await prisma.carMovement.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CarMovements and only return the `id`
     * const carMovementWithIdOnly = await prisma.carMovement.updateManyAndReturn({
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
    updateManyAndReturn<T extends CarMovementUpdateManyAndReturnArgs>(args: SelectSubset<T, CarMovementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarMovementPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CarMovement.
     * @param {CarMovementUpsertArgs} args - Arguments to update or create a CarMovement.
     * @example
     * // Update or create a CarMovement
     * const carMovement = await prisma.carMovement.upsert({
     *   create: {
     *     // ... data to create a CarMovement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CarMovement we want to update
     *   }
     * })
     */
    upsert<T extends CarMovementUpsertArgs>(args: SelectSubset<T, CarMovementUpsertArgs<ExtArgs>>): Prisma__CarMovementClient<$Result.GetResult<Prisma.$CarMovementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CarMovements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarMovementCountArgs} args - Arguments to filter CarMovements to count.
     * @example
     * // Count the number of CarMovements
     * const count = await prisma.carMovement.count({
     *   where: {
     *     // ... the filter for the CarMovements we want to count
     *   }
     * })
    **/
    count<T extends CarMovementCountArgs>(
      args?: Subset<T, CarMovementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CarMovementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CarMovement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarMovementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CarMovementAggregateArgs>(args: Subset<T, CarMovementAggregateArgs>): Prisma.PrismaPromise<GetCarMovementAggregateType<T>>

    /**
     * Group by CarMovement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarMovementGroupByArgs} args - Group by arguments.
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
      T extends CarMovementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CarMovementGroupByArgs['orderBy'] }
        : { orderBy?: CarMovementGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CarMovementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCarMovementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CarMovement model
   */
  readonly fields: CarMovementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CarMovement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CarMovementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    parking<T extends ParkingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ParkingDefaultArgs<ExtArgs>>): Prisma__ParkingClient<$Result.GetResult<Prisma.$ParkingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CarMovement model
   */
  interface CarMovementFieldRefs {
    readonly id: FieldRef<"CarMovement", 'String'>
    readonly plateNumber: FieldRef<"CarMovement", 'String'>
    readonly parkingCode: FieldRef<"CarMovement", 'String'>
    readonly entryDateTime: FieldRef<"CarMovement", 'DateTime'>
    readonly exitDateTime: FieldRef<"CarMovement", 'DateTime'>
    readonly chargedAmount: FieldRef<"CarMovement", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * CarMovement findUnique
   */
  export type CarMovementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarMovement
     */
    select?: CarMovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarMovement
     */
    omit?: CarMovementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarMovementInclude<ExtArgs> | null
    /**
     * Filter, which CarMovement to fetch.
     */
    where: CarMovementWhereUniqueInput
  }

  /**
   * CarMovement findUniqueOrThrow
   */
  export type CarMovementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarMovement
     */
    select?: CarMovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarMovement
     */
    omit?: CarMovementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarMovementInclude<ExtArgs> | null
    /**
     * Filter, which CarMovement to fetch.
     */
    where: CarMovementWhereUniqueInput
  }

  /**
   * CarMovement findFirst
   */
  export type CarMovementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarMovement
     */
    select?: CarMovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarMovement
     */
    omit?: CarMovementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarMovementInclude<ExtArgs> | null
    /**
     * Filter, which CarMovement to fetch.
     */
    where?: CarMovementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CarMovements to fetch.
     */
    orderBy?: CarMovementOrderByWithRelationInput | CarMovementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CarMovements.
     */
    cursor?: CarMovementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CarMovements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CarMovements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CarMovements.
     */
    distinct?: CarMovementScalarFieldEnum | CarMovementScalarFieldEnum[]
  }

  /**
   * CarMovement findFirstOrThrow
   */
  export type CarMovementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarMovement
     */
    select?: CarMovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarMovement
     */
    omit?: CarMovementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarMovementInclude<ExtArgs> | null
    /**
     * Filter, which CarMovement to fetch.
     */
    where?: CarMovementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CarMovements to fetch.
     */
    orderBy?: CarMovementOrderByWithRelationInput | CarMovementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CarMovements.
     */
    cursor?: CarMovementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CarMovements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CarMovements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CarMovements.
     */
    distinct?: CarMovementScalarFieldEnum | CarMovementScalarFieldEnum[]
  }

  /**
   * CarMovement findMany
   */
  export type CarMovementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarMovement
     */
    select?: CarMovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarMovement
     */
    omit?: CarMovementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarMovementInclude<ExtArgs> | null
    /**
     * Filter, which CarMovements to fetch.
     */
    where?: CarMovementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CarMovements to fetch.
     */
    orderBy?: CarMovementOrderByWithRelationInput | CarMovementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CarMovements.
     */
    cursor?: CarMovementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CarMovements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CarMovements.
     */
    skip?: number
    distinct?: CarMovementScalarFieldEnum | CarMovementScalarFieldEnum[]
  }

  /**
   * CarMovement create
   */
  export type CarMovementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarMovement
     */
    select?: CarMovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarMovement
     */
    omit?: CarMovementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarMovementInclude<ExtArgs> | null
    /**
     * The data needed to create a CarMovement.
     */
    data: XOR<CarMovementCreateInput, CarMovementUncheckedCreateInput>
  }

  /**
   * CarMovement createMany
   */
  export type CarMovementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CarMovements.
     */
    data: CarMovementCreateManyInput | CarMovementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CarMovement createManyAndReturn
   */
  export type CarMovementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarMovement
     */
    select?: CarMovementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CarMovement
     */
    omit?: CarMovementOmit<ExtArgs> | null
    /**
     * The data used to create many CarMovements.
     */
    data: CarMovementCreateManyInput | CarMovementCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarMovementIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CarMovement update
   */
  export type CarMovementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarMovement
     */
    select?: CarMovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarMovement
     */
    omit?: CarMovementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarMovementInclude<ExtArgs> | null
    /**
     * The data needed to update a CarMovement.
     */
    data: XOR<CarMovementUpdateInput, CarMovementUncheckedUpdateInput>
    /**
     * Choose, which CarMovement to update.
     */
    where: CarMovementWhereUniqueInput
  }

  /**
   * CarMovement updateMany
   */
  export type CarMovementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CarMovements.
     */
    data: XOR<CarMovementUpdateManyMutationInput, CarMovementUncheckedUpdateManyInput>
    /**
     * Filter which CarMovements to update
     */
    where?: CarMovementWhereInput
    /**
     * Limit how many CarMovements to update.
     */
    limit?: number
  }

  /**
   * CarMovement updateManyAndReturn
   */
  export type CarMovementUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarMovement
     */
    select?: CarMovementSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CarMovement
     */
    omit?: CarMovementOmit<ExtArgs> | null
    /**
     * The data used to update CarMovements.
     */
    data: XOR<CarMovementUpdateManyMutationInput, CarMovementUncheckedUpdateManyInput>
    /**
     * Filter which CarMovements to update
     */
    where?: CarMovementWhereInput
    /**
     * Limit how many CarMovements to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarMovementIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CarMovement upsert
   */
  export type CarMovementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarMovement
     */
    select?: CarMovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarMovement
     */
    omit?: CarMovementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarMovementInclude<ExtArgs> | null
    /**
     * The filter to search for the CarMovement to update in case it exists.
     */
    where: CarMovementWhereUniqueInput
    /**
     * In case the CarMovement found by the `where` argument doesn't exist, create a new CarMovement with this data.
     */
    create: XOR<CarMovementCreateInput, CarMovementUncheckedCreateInput>
    /**
     * In case the CarMovement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CarMovementUpdateInput, CarMovementUncheckedUpdateInput>
  }

  /**
   * CarMovement delete
   */
  export type CarMovementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarMovement
     */
    select?: CarMovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarMovement
     */
    omit?: CarMovementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarMovementInclude<ExtArgs> | null
    /**
     * Filter which CarMovement to delete.
     */
    where: CarMovementWhereUniqueInput
  }

  /**
   * CarMovement deleteMany
   */
  export type CarMovementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CarMovements to delete
     */
    where?: CarMovementWhereInput
    /**
     * Limit how many CarMovements to delete.
     */
    limit?: number
  }

  /**
   * CarMovement without action
   */
  export type CarMovementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarMovement
     */
    select?: CarMovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarMovement
     */
    omit?: CarMovementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarMovementInclude<ExtArgs> | null
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
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    password: 'password',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ParkingScalarFieldEnum: {
    code: 'code',
    parkingName: 'parkingName',
    availableSpaces: 'availableSpaces',
    location: 'location',
    chargingFeePerHour: 'chargingFeePerHour',
    userId: 'userId'
  };

  export type ParkingScalarFieldEnum = (typeof ParkingScalarFieldEnum)[keyof typeof ParkingScalarFieldEnum]


  export const CarMovementScalarFieldEnum: {
    id: 'id',
    plateNumber: 'plateNumber',
    parkingCode: 'parkingCode',
    entryDateTime: 'entryDateTime',
    exitDateTime: 'exitDateTime',
    chargedAmount: 'chargedAmount'
  };

  export type CarMovementScalarFieldEnum = (typeof CarMovementScalarFieldEnum)[keyof typeof CarMovementScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


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
   * Reference to a field of type 'EROLE'
   */
  export type EnumEROLEFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EROLE'>
    


  /**
   * Reference to a field of type 'EROLE[]'
   */
  export type ListEnumEROLEFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EROLE[]'>
    


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
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumEROLEFilter<"User"> | $Enums.EROLE
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    parking?: ParkingListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    parking?: ParkingOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumEROLEFilter<"User"> | $Enums.EROLE
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    parking?: ParkingListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
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
    firstName?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumEROLEWithAggregatesFilter<"User"> | $Enums.EROLE
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ParkingWhereInput = {
    AND?: ParkingWhereInput | ParkingWhereInput[]
    OR?: ParkingWhereInput[]
    NOT?: ParkingWhereInput | ParkingWhereInput[]
    code?: StringFilter<"Parking"> | string
    parkingName?: StringFilter<"Parking"> | string
    availableSpaces?: IntFilter<"Parking"> | number
    location?: StringFilter<"Parking"> | string
    chargingFeePerHour?: FloatFilter<"Parking"> | number
    userId?: StringFilter<"Parking"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    carMovement?: CarMovementListRelationFilter
  }

  export type ParkingOrderByWithRelationInput = {
    code?: SortOrder
    parkingName?: SortOrder
    availableSpaces?: SortOrder
    location?: SortOrder
    chargingFeePerHour?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    carMovement?: CarMovementOrderByRelationAggregateInput
  }

  export type ParkingWhereUniqueInput = Prisma.AtLeast<{
    code?: string
    AND?: ParkingWhereInput | ParkingWhereInput[]
    OR?: ParkingWhereInput[]
    NOT?: ParkingWhereInput | ParkingWhereInput[]
    parkingName?: StringFilter<"Parking"> | string
    availableSpaces?: IntFilter<"Parking"> | number
    location?: StringFilter<"Parking"> | string
    chargingFeePerHour?: FloatFilter<"Parking"> | number
    userId?: StringFilter<"Parking"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    carMovement?: CarMovementListRelationFilter
  }, "code" | "code">

  export type ParkingOrderByWithAggregationInput = {
    code?: SortOrder
    parkingName?: SortOrder
    availableSpaces?: SortOrder
    location?: SortOrder
    chargingFeePerHour?: SortOrder
    userId?: SortOrder
    _count?: ParkingCountOrderByAggregateInput
    _avg?: ParkingAvgOrderByAggregateInput
    _max?: ParkingMaxOrderByAggregateInput
    _min?: ParkingMinOrderByAggregateInput
    _sum?: ParkingSumOrderByAggregateInput
  }

  export type ParkingScalarWhereWithAggregatesInput = {
    AND?: ParkingScalarWhereWithAggregatesInput | ParkingScalarWhereWithAggregatesInput[]
    OR?: ParkingScalarWhereWithAggregatesInput[]
    NOT?: ParkingScalarWhereWithAggregatesInput | ParkingScalarWhereWithAggregatesInput[]
    code?: StringWithAggregatesFilter<"Parking"> | string
    parkingName?: StringWithAggregatesFilter<"Parking"> | string
    availableSpaces?: IntWithAggregatesFilter<"Parking"> | number
    location?: StringWithAggregatesFilter<"Parking"> | string
    chargingFeePerHour?: FloatWithAggregatesFilter<"Parking"> | number
    userId?: StringWithAggregatesFilter<"Parking"> | string
  }

  export type CarMovementWhereInput = {
    AND?: CarMovementWhereInput | CarMovementWhereInput[]
    OR?: CarMovementWhereInput[]
    NOT?: CarMovementWhereInput | CarMovementWhereInput[]
    id?: StringFilter<"CarMovement"> | string
    plateNumber?: StringFilter<"CarMovement"> | string
    parkingCode?: StringFilter<"CarMovement"> | string
    entryDateTime?: DateTimeFilter<"CarMovement"> | Date | string
    exitDateTime?: DateTimeFilter<"CarMovement"> | Date | string
    chargedAmount?: IntFilter<"CarMovement"> | number
    parking?: XOR<ParkingScalarRelationFilter, ParkingWhereInput>
  }

  export type CarMovementOrderByWithRelationInput = {
    id?: SortOrder
    plateNumber?: SortOrder
    parkingCode?: SortOrder
    entryDateTime?: SortOrder
    exitDateTime?: SortOrder
    chargedAmount?: SortOrder
    parking?: ParkingOrderByWithRelationInput
  }

  export type CarMovementWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CarMovementWhereInput | CarMovementWhereInput[]
    OR?: CarMovementWhereInput[]
    NOT?: CarMovementWhereInput | CarMovementWhereInput[]
    plateNumber?: StringFilter<"CarMovement"> | string
    parkingCode?: StringFilter<"CarMovement"> | string
    entryDateTime?: DateTimeFilter<"CarMovement"> | Date | string
    exitDateTime?: DateTimeFilter<"CarMovement"> | Date | string
    chargedAmount?: IntFilter<"CarMovement"> | number
    parking?: XOR<ParkingScalarRelationFilter, ParkingWhereInput>
  }, "id">

  export type CarMovementOrderByWithAggregationInput = {
    id?: SortOrder
    plateNumber?: SortOrder
    parkingCode?: SortOrder
    entryDateTime?: SortOrder
    exitDateTime?: SortOrder
    chargedAmount?: SortOrder
    _count?: CarMovementCountOrderByAggregateInput
    _avg?: CarMovementAvgOrderByAggregateInput
    _max?: CarMovementMaxOrderByAggregateInput
    _min?: CarMovementMinOrderByAggregateInput
    _sum?: CarMovementSumOrderByAggregateInput
  }

  export type CarMovementScalarWhereWithAggregatesInput = {
    AND?: CarMovementScalarWhereWithAggregatesInput | CarMovementScalarWhereWithAggregatesInput[]
    OR?: CarMovementScalarWhereWithAggregatesInput[]
    NOT?: CarMovementScalarWhereWithAggregatesInput | CarMovementScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CarMovement"> | string
    plateNumber?: StringWithAggregatesFilter<"CarMovement"> | string
    parkingCode?: StringWithAggregatesFilter<"CarMovement"> | string
    entryDateTime?: DateTimeWithAggregatesFilter<"CarMovement"> | Date | string
    exitDateTime?: DateTimeWithAggregatesFilter<"CarMovement"> | Date | string
    chargedAmount?: IntWithAggregatesFilter<"CarMovement"> | number
  }

  export type UserCreateInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    password: string
    role: $Enums.EROLE
    createdAt?: Date | string
    updatedAt?: Date | string
    parking?: ParkingCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    password: string
    role: $Enums.EROLE
    createdAt?: Date | string
    updatedAt?: Date | string
    parking?: ParkingUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumEROLEFieldUpdateOperationsInput | $Enums.EROLE
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parking?: ParkingUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumEROLEFieldUpdateOperationsInput | $Enums.EROLE
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parking?: ParkingUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    password: string
    role: $Enums.EROLE
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumEROLEFieldUpdateOperationsInput | $Enums.EROLE
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumEROLEFieldUpdateOperationsInput | $Enums.EROLE
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParkingCreateInput = {
    code: string
    parkingName: string
    availableSpaces: number
    location: string
    chargingFeePerHour: number
    user: UserCreateNestedOneWithoutParkingInput
    carMovement?: CarMovementCreateNestedManyWithoutParkingInput
  }

  export type ParkingUncheckedCreateInput = {
    code: string
    parkingName: string
    availableSpaces: number
    location: string
    chargingFeePerHour: number
    userId: string
    carMovement?: CarMovementUncheckedCreateNestedManyWithoutParkingInput
  }

  export type ParkingUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    parkingName?: StringFieldUpdateOperationsInput | string
    availableSpaces?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    chargingFeePerHour?: FloatFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutParkingNestedInput
    carMovement?: CarMovementUpdateManyWithoutParkingNestedInput
  }

  export type ParkingUncheckedUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    parkingName?: StringFieldUpdateOperationsInput | string
    availableSpaces?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    chargingFeePerHour?: FloatFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    carMovement?: CarMovementUncheckedUpdateManyWithoutParkingNestedInput
  }

  export type ParkingCreateManyInput = {
    code: string
    parkingName: string
    availableSpaces: number
    location: string
    chargingFeePerHour: number
    userId: string
  }

  export type ParkingUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
    parkingName?: StringFieldUpdateOperationsInput | string
    availableSpaces?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    chargingFeePerHour?: FloatFieldUpdateOperationsInput | number
  }

  export type ParkingUncheckedUpdateManyInput = {
    code?: StringFieldUpdateOperationsInput | string
    parkingName?: StringFieldUpdateOperationsInput | string
    availableSpaces?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    chargingFeePerHour?: FloatFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type CarMovementCreateInput = {
    id?: string
    plateNumber: string
    entryDateTime: Date | string
    exitDateTime?: Date | string
    chargedAmount?: number
    parking: ParkingCreateNestedOneWithoutCarMovementInput
  }

  export type CarMovementUncheckedCreateInput = {
    id?: string
    plateNumber: string
    parkingCode: string
    entryDateTime: Date | string
    exitDateTime?: Date | string
    chargedAmount?: number
  }

  export type CarMovementUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    plateNumber?: StringFieldUpdateOperationsInput | string
    entryDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    exitDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    chargedAmount?: IntFieldUpdateOperationsInput | number
    parking?: ParkingUpdateOneRequiredWithoutCarMovementNestedInput
  }

  export type CarMovementUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    plateNumber?: StringFieldUpdateOperationsInput | string
    parkingCode?: StringFieldUpdateOperationsInput | string
    entryDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    exitDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    chargedAmount?: IntFieldUpdateOperationsInput | number
  }

  export type CarMovementCreateManyInput = {
    id?: string
    plateNumber: string
    parkingCode: string
    entryDateTime: Date | string
    exitDateTime?: Date | string
    chargedAmount?: number
  }

  export type CarMovementUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    plateNumber?: StringFieldUpdateOperationsInput | string
    entryDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    exitDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    chargedAmount?: IntFieldUpdateOperationsInput | number
  }

  export type CarMovementUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    plateNumber?: StringFieldUpdateOperationsInput | string
    parkingCode?: StringFieldUpdateOperationsInput | string
    entryDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    exitDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    chargedAmount?: IntFieldUpdateOperationsInput | number
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

  export type EnumEROLEFilter<$PrismaModel = never> = {
    equals?: $Enums.EROLE | EnumEROLEFieldRefInput<$PrismaModel>
    in?: $Enums.EROLE[] | ListEnumEROLEFieldRefInput<$PrismaModel>
    notIn?: $Enums.EROLE[] | ListEnumEROLEFieldRefInput<$PrismaModel>
    not?: NestedEnumEROLEFilter<$PrismaModel> | $Enums.EROLE
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

  export type ParkingListRelationFilter = {
    every?: ParkingWhereInput
    some?: ParkingWhereInput
    none?: ParkingWhereInput
  }

  export type ParkingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
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

  export type EnumEROLEWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EROLE | EnumEROLEFieldRefInput<$PrismaModel>
    in?: $Enums.EROLE[] | ListEnumEROLEFieldRefInput<$PrismaModel>
    notIn?: $Enums.EROLE[] | ListEnumEROLEFieldRefInput<$PrismaModel>
    not?: NestedEnumEROLEWithAggregatesFilter<$PrismaModel> | $Enums.EROLE
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEROLEFilter<$PrismaModel>
    _max?: NestedEnumEROLEFilter<$PrismaModel>
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type CarMovementListRelationFilter = {
    every?: CarMovementWhereInput
    some?: CarMovementWhereInput
    none?: CarMovementWhereInput
  }

  export type CarMovementOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ParkingCountOrderByAggregateInput = {
    code?: SortOrder
    parkingName?: SortOrder
    availableSpaces?: SortOrder
    location?: SortOrder
    chargingFeePerHour?: SortOrder
    userId?: SortOrder
  }

  export type ParkingAvgOrderByAggregateInput = {
    availableSpaces?: SortOrder
    chargingFeePerHour?: SortOrder
  }

  export type ParkingMaxOrderByAggregateInput = {
    code?: SortOrder
    parkingName?: SortOrder
    availableSpaces?: SortOrder
    location?: SortOrder
    chargingFeePerHour?: SortOrder
    userId?: SortOrder
  }

  export type ParkingMinOrderByAggregateInput = {
    code?: SortOrder
    parkingName?: SortOrder
    availableSpaces?: SortOrder
    location?: SortOrder
    chargingFeePerHour?: SortOrder
    userId?: SortOrder
  }

  export type ParkingSumOrderByAggregateInput = {
    availableSpaces?: SortOrder
    chargingFeePerHour?: SortOrder
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

  export type ParkingScalarRelationFilter = {
    is?: ParkingWhereInput
    isNot?: ParkingWhereInput
  }

  export type CarMovementCountOrderByAggregateInput = {
    id?: SortOrder
    plateNumber?: SortOrder
    parkingCode?: SortOrder
    entryDateTime?: SortOrder
    exitDateTime?: SortOrder
    chargedAmount?: SortOrder
  }

  export type CarMovementAvgOrderByAggregateInput = {
    chargedAmount?: SortOrder
  }

  export type CarMovementMaxOrderByAggregateInput = {
    id?: SortOrder
    plateNumber?: SortOrder
    parkingCode?: SortOrder
    entryDateTime?: SortOrder
    exitDateTime?: SortOrder
    chargedAmount?: SortOrder
  }

  export type CarMovementMinOrderByAggregateInput = {
    id?: SortOrder
    plateNumber?: SortOrder
    parkingCode?: SortOrder
    entryDateTime?: SortOrder
    exitDateTime?: SortOrder
    chargedAmount?: SortOrder
  }

  export type CarMovementSumOrderByAggregateInput = {
    chargedAmount?: SortOrder
  }

  export type ParkingCreateNestedManyWithoutUserInput = {
    create?: XOR<ParkingCreateWithoutUserInput, ParkingUncheckedCreateWithoutUserInput> | ParkingCreateWithoutUserInput[] | ParkingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ParkingCreateOrConnectWithoutUserInput | ParkingCreateOrConnectWithoutUserInput[]
    createMany?: ParkingCreateManyUserInputEnvelope
    connect?: ParkingWhereUniqueInput | ParkingWhereUniqueInput[]
  }

  export type ParkingUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ParkingCreateWithoutUserInput, ParkingUncheckedCreateWithoutUserInput> | ParkingCreateWithoutUserInput[] | ParkingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ParkingCreateOrConnectWithoutUserInput | ParkingCreateOrConnectWithoutUserInput[]
    createMany?: ParkingCreateManyUserInputEnvelope
    connect?: ParkingWhereUniqueInput | ParkingWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumEROLEFieldUpdateOperationsInput = {
    set?: $Enums.EROLE
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ParkingUpdateManyWithoutUserNestedInput = {
    create?: XOR<ParkingCreateWithoutUserInput, ParkingUncheckedCreateWithoutUserInput> | ParkingCreateWithoutUserInput[] | ParkingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ParkingCreateOrConnectWithoutUserInput | ParkingCreateOrConnectWithoutUserInput[]
    upsert?: ParkingUpsertWithWhereUniqueWithoutUserInput | ParkingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ParkingCreateManyUserInputEnvelope
    set?: ParkingWhereUniqueInput | ParkingWhereUniqueInput[]
    disconnect?: ParkingWhereUniqueInput | ParkingWhereUniqueInput[]
    delete?: ParkingWhereUniqueInput | ParkingWhereUniqueInput[]
    connect?: ParkingWhereUniqueInput | ParkingWhereUniqueInput[]
    update?: ParkingUpdateWithWhereUniqueWithoutUserInput | ParkingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ParkingUpdateManyWithWhereWithoutUserInput | ParkingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ParkingScalarWhereInput | ParkingScalarWhereInput[]
  }

  export type ParkingUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ParkingCreateWithoutUserInput, ParkingUncheckedCreateWithoutUserInput> | ParkingCreateWithoutUserInput[] | ParkingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ParkingCreateOrConnectWithoutUserInput | ParkingCreateOrConnectWithoutUserInput[]
    upsert?: ParkingUpsertWithWhereUniqueWithoutUserInput | ParkingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ParkingCreateManyUserInputEnvelope
    set?: ParkingWhereUniqueInput | ParkingWhereUniqueInput[]
    disconnect?: ParkingWhereUniqueInput | ParkingWhereUniqueInput[]
    delete?: ParkingWhereUniqueInput | ParkingWhereUniqueInput[]
    connect?: ParkingWhereUniqueInput | ParkingWhereUniqueInput[]
    update?: ParkingUpdateWithWhereUniqueWithoutUserInput | ParkingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ParkingUpdateManyWithWhereWithoutUserInput | ParkingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ParkingScalarWhereInput | ParkingScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutParkingInput = {
    create?: XOR<UserCreateWithoutParkingInput, UserUncheckedCreateWithoutParkingInput>
    connectOrCreate?: UserCreateOrConnectWithoutParkingInput
    connect?: UserWhereUniqueInput
  }

  export type CarMovementCreateNestedManyWithoutParkingInput = {
    create?: XOR<CarMovementCreateWithoutParkingInput, CarMovementUncheckedCreateWithoutParkingInput> | CarMovementCreateWithoutParkingInput[] | CarMovementUncheckedCreateWithoutParkingInput[]
    connectOrCreate?: CarMovementCreateOrConnectWithoutParkingInput | CarMovementCreateOrConnectWithoutParkingInput[]
    createMany?: CarMovementCreateManyParkingInputEnvelope
    connect?: CarMovementWhereUniqueInput | CarMovementWhereUniqueInput[]
  }

  export type CarMovementUncheckedCreateNestedManyWithoutParkingInput = {
    create?: XOR<CarMovementCreateWithoutParkingInput, CarMovementUncheckedCreateWithoutParkingInput> | CarMovementCreateWithoutParkingInput[] | CarMovementUncheckedCreateWithoutParkingInput[]
    connectOrCreate?: CarMovementCreateOrConnectWithoutParkingInput | CarMovementCreateOrConnectWithoutParkingInput[]
    createMany?: CarMovementCreateManyParkingInputEnvelope
    connect?: CarMovementWhereUniqueInput | CarMovementWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutParkingNestedInput = {
    create?: XOR<UserCreateWithoutParkingInput, UserUncheckedCreateWithoutParkingInput>
    connectOrCreate?: UserCreateOrConnectWithoutParkingInput
    upsert?: UserUpsertWithoutParkingInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutParkingInput, UserUpdateWithoutParkingInput>, UserUncheckedUpdateWithoutParkingInput>
  }

  export type CarMovementUpdateManyWithoutParkingNestedInput = {
    create?: XOR<CarMovementCreateWithoutParkingInput, CarMovementUncheckedCreateWithoutParkingInput> | CarMovementCreateWithoutParkingInput[] | CarMovementUncheckedCreateWithoutParkingInput[]
    connectOrCreate?: CarMovementCreateOrConnectWithoutParkingInput | CarMovementCreateOrConnectWithoutParkingInput[]
    upsert?: CarMovementUpsertWithWhereUniqueWithoutParkingInput | CarMovementUpsertWithWhereUniqueWithoutParkingInput[]
    createMany?: CarMovementCreateManyParkingInputEnvelope
    set?: CarMovementWhereUniqueInput | CarMovementWhereUniqueInput[]
    disconnect?: CarMovementWhereUniqueInput | CarMovementWhereUniqueInput[]
    delete?: CarMovementWhereUniqueInput | CarMovementWhereUniqueInput[]
    connect?: CarMovementWhereUniqueInput | CarMovementWhereUniqueInput[]
    update?: CarMovementUpdateWithWhereUniqueWithoutParkingInput | CarMovementUpdateWithWhereUniqueWithoutParkingInput[]
    updateMany?: CarMovementUpdateManyWithWhereWithoutParkingInput | CarMovementUpdateManyWithWhereWithoutParkingInput[]
    deleteMany?: CarMovementScalarWhereInput | CarMovementScalarWhereInput[]
  }

  export type CarMovementUncheckedUpdateManyWithoutParkingNestedInput = {
    create?: XOR<CarMovementCreateWithoutParkingInput, CarMovementUncheckedCreateWithoutParkingInput> | CarMovementCreateWithoutParkingInput[] | CarMovementUncheckedCreateWithoutParkingInput[]
    connectOrCreate?: CarMovementCreateOrConnectWithoutParkingInput | CarMovementCreateOrConnectWithoutParkingInput[]
    upsert?: CarMovementUpsertWithWhereUniqueWithoutParkingInput | CarMovementUpsertWithWhereUniqueWithoutParkingInput[]
    createMany?: CarMovementCreateManyParkingInputEnvelope
    set?: CarMovementWhereUniqueInput | CarMovementWhereUniqueInput[]
    disconnect?: CarMovementWhereUniqueInput | CarMovementWhereUniqueInput[]
    delete?: CarMovementWhereUniqueInput | CarMovementWhereUniqueInput[]
    connect?: CarMovementWhereUniqueInput | CarMovementWhereUniqueInput[]
    update?: CarMovementUpdateWithWhereUniqueWithoutParkingInput | CarMovementUpdateWithWhereUniqueWithoutParkingInput[]
    updateMany?: CarMovementUpdateManyWithWhereWithoutParkingInput | CarMovementUpdateManyWithWhereWithoutParkingInput[]
    deleteMany?: CarMovementScalarWhereInput | CarMovementScalarWhereInput[]
  }

  export type ParkingCreateNestedOneWithoutCarMovementInput = {
    create?: XOR<ParkingCreateWithoutCarMovementInput, ParkingUncheckedCreateWithoutCarMovementInput>
    connectOrCreate?: ParkingCreateOrConnectWithoutCarMovementInput
    connect?: ParkingWhereUniqueInput
  }

  export type ParkingUpdateOneRequiredWithoutCarMovementNestedInput = {
    create?: XOR<ParkingCreateWithoutCarMovementInput, ParkingUncheckedCreateWithoutCarMovementInput>
    connectOrCreate?: ParkingCreateOrConnectWithoutCarMovementInput
    upsert?: ParkingUpsertWithoutCarMovementInput
    connect?: ParkingWhereUniqueInput
    update?: XOR<XOR<ParkingUpdateToOneWithWhereWithoutCarMovementInput, ParkingUpdateWithoutCarMovementInput>, ParkingUncheckedUpdateWithoutCarMovementInput>
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

  export type NestedEnumEROLEFilter<$PrismaModel = never> = {
    equals?: $Enums.EROLE | EnumEROLEFieldRefInput<$PrismaModel>
    in?: $Enums.EROLE[] | ListEnumEROLEFieldRefInput<$PrismaModel>
    notIn?: $Enums.EROLE[] | ListEnumEROLEFieldRefInput<$PrismaModel>
    not?: NestedEnumEROLEFilter<$PrismaModel> | $Enums.EROLE
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

  export type NestedEnumEROLEWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EROLE | EnumEROLEFieldRefInput<$PrismaModel>
    in?: $Enums.EROLE[] | ListEnumEROLEFieldRefInput<$PrismaModel>
    notIn?: $Enums.EROLE[] | ListEnumEROLEFieldRefInput<$PrismaModel>
    not?: NestedEnumEROLEWithAggregatesFilter<$PrismaModel> | $Enums.EROLE
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEROLEFilter<$PrismaModel>
    _max?: NestedEnumEROLEFilter<$PrismaModel>
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

  export type ParkingCreateWithoutUserInput = {
    code: string
    parkingName: string
    availableSpaces: number
    location: string
    chargingFeePerHour: number
    carMovement?: CarMovementCreateNestedManyWithoutParkingInput
  }

  export type ParkingUncheckedCreateWithoutUserInput = {
    code: string
    parkingName: string
    availableSpaces: number
    location: string
    chargingFeePerHour: number
    carMovement?: CarMovementUncheckedCreateNestedManyWithoutParkingInput
  }

  export type ParkingCreateOrConnectWithoutUserInput = {
    where: ParkingWhereUniqueInput
    create: XOR<ParkingCreateWithoutUserInput, ParkingUncheckedCreateWithoutUserInput>
  }

  export type ParkingCreateManyUserInputEnvelope = {
    data: ParkingCreateManyUserInput | ParkingCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ParkingUpsertWithWhereUniqueWithoutUserInput = {
    where: ParkingWhereUniqueInput
    update: XOR<ParkingUpdateWithoutUserInput, ParkingUncheckedUpdateWithoutUserInput>
    create: XOR<ParkingCreateWithoutUserInput, ParkingUncheckedCreateWithoutUserInput>
  }

  export type ParkingUpdateWithWhereUniqueWithoutUserInput = {
    where: ParkingWhereUniqueInput
    data: XOR<ParkingUpdateWithoutUserInput, ParkingUncheckedUpdateWithoutUserInput>
  }

  export type ParkingUpdateManyWithWhereWithoutUserInput = {
    where: ParkingScalarWhereInput
    data: XOR<ParkingUpdateManyMutationInput, ParkingUncheckedUpdateManyWithoutUserInput>
  }

  export type ParkingScalarWhereInput = {
    AND?: ParkingScalarWhereInput | ParkingScalarWhereInput[]
    OR?: ParkingScalarWhereInput[]
    NOT?: ParkingScalarWhereInput | ParkingScalarWhereInput[]
    code?: StringFilter<"Parking"> | string
    parkingName?: StringFilter<"Parking"> | string
    availableSpaces?: IntFilter<"Parking"> | number
    location?: StringFilter<"Parking"> | string
    chargingFeePerHour?: FloatFilter<"Parking"> | number
    userId?: StringFilter<"Parking"> | string
  }

  export type UserCreateWithoutParkingInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    password: string
    role: $Enums.EROLE
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutParkingInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    password: string
    role: $Enums.EROLE
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutParkingInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutParkingInput, UserUncheckedCreateWithoutParkingInput>
  }

  export type CarMovementCreateWithoutParkingInput = {
    id?: string
    plateNumber: string
    entryDateTime: Date | string
    exitDateTime?: Date | string
    chargedAmount?: number
  }

  export type CarMovementUncheckedCreateWithoutParkingInput = {
    id?: string
    plateNumber: string
    entryDateTime: Date | string
    exitDateTime?: Date | string
    chargedAmount?: number
  }

  export type CarMovementCreateOrConnectWithoutParkingInput = {
    where: CarMovementWhereUniqueInput
    create: XOR<CarMovementCreateWithoutParkingInput, CarMovementUncheckedCreateWithoutParkingInput>
  }

  export type CarMovementCreateManyParkingInputEnvelope = {
    data: CarMovementCreateManyParkingInput | CarMovementCreateManyParkingInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutParkingInput = {
    update: XOR<UserUpdateWithoutParkingInput, UserUncheckedUpdateWithoutParkingInput>
    create: XOR<UserCreateWithoutParkingInput, UserUncheckedCreateWithoutParkingInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutParkingInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutParkingInput, UserUncheckedUpdateWithoutParkingInput>
  }

  export type UserUpdateWithoutParkingInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumEROLEFieldUpdateOperationsInput | $Enums.EROLE
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutParkingInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumEROLEFieldUpdateOperationsInput | $Enums.EROLE
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CarMovementUpsertWithWhereUniqueWithoutParkingInput = {
    where: CarMovementWhereUniqueInput
    update: XOR<CarMovementUpdateWithoutParkingInput, CarMovementUncheckedUpdateWithoutParkingInput>
    create: XOR<CarMovementCreateWithoutParkingInput, CarMovementUncheckedCreateWithoutParkingInput>
  }

  export type CarMovementUpdateWithWhereUniqueWithoutParkingInput = {
    where: CarMovementWhereUniqueInput
    data: XOR<CarMovementUpdateWithoutParkingInput, CarMovementUncheckedUpdateWithoutParkingInput>
  }

  export type CarMovementUpdateManyWithWhereWithoutParkingInput = {
    where: CarMovementScalarWhereInput
    data: XOR<CarMovementUpdateManyMutationInput, CarMovementUncheckedUpdateManyWithoutParkingInput>
  }

  export type CarMovementScalarWhereInput = {
    AND?: CarMovementScalarWhereInput | CarMovementScalarWhereInput[]
    OR?: CarMovementScalarWhereInput[]
    NOT?: CarMovementScalarWhereInput | CarMovementScalarWhereInput[]
    id?: StringFilter<"CarMovement"> | string
    plateNumber?: StringFilter<"CarMovement"> | string
    parkingCode?: StringFilter<"CarMovement"> | string
    entryDateTime?: DateTimeFilter<"CarMovement"> | Date | string
    exitDateTime?: DateTimeFilter<"CarMovement"> | Date | string
    chargedAmount?: IntFilter<"CarMovement"> | number
  }

  export type ParkingCreateWithoutCarMovementInput = {
    code: string
    parkingName: string
    availableSpaces: number
    location: string
    chargingFeePerHour: number
    user: UserCreateNestedOneWithoutParkingInput
  }

  export type ParkingUncheckedCreateWithoutCarMovementInput = {
    code: string
    parkingName: string
    availableSpaces: number
    location: string
    chargingFeePerHour: number
    userId: string
  }

  export type ParkingCreateOrConnectWithoutCarMovementInput = {
    where: ParkingWhereUniqueInput
    create: XOR<ParkingCreateWithoutCarMovementInput, ParkingUncheckedCreateWithoutCarMovementInput>
  }

  export type ParkingUpsertWithoutCarMovementInput = {
    update: XOR<ParkingUpdateWithoutCarMovementInput, ParkingUncheckedUpdateWithoutCarMovementInput>
    create: XOR<ParkingCreateWithoutCarMovementInput, ParkingUncheckedCreateWithoutCarMovementInput>
    where?: ParkingWhereInput
  }

  export type ParkingUpdateToOneWithWhereWithoutCarMovementInput = {
    where?: ParkingWhereInput
    data: XOR<ParkingUpdateWithoutCarMovementInput, ParkingUncheckedUpdateWithoutCarMovementInput>
  }

  export type ParkingUpdateWithoutCarMovementInput = {
    code?: StringFieldUpdateOperationsInput | string
    parkingName?: StringFieldUpdateOperationsInput | string
    availableSpaces?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    chargingFeePerHour?: FloatFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutParkingNestedInput
  }

  export type ParkingUncheckedUpdateWithoutCarMovementInput = {
    code?: StringFieldUpdateOperationsInput | string
    parkingName?: StringFieldUpdateOperationsInput | string
    availableSpaces?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    chargingFeePerHour?: FloatFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ParkingCreateManyUserInput = {
    code: string
    parkingName: string
    availableSpaces: number
    location: string
    chargingFeePerHour: number
  }

  export type ParkingUpdateWithoutUserInput = {
    code?: StringFieldUpdateOperationsInput | string
    parkingName?: StringFieldUpdateOperationsInput | string
    availableSpaces?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    chargingFeePerHour?: FloatFieldUpdateOperationsInput | number
    carMovement?: CarMovementUpdateManyWithoutParkingNestedInput
  }

  export type ParkingUncheckedUpdateWithoutUserInput = {
    code?: StringFieldUpdateOperationsInput | string
    parkingName?: StringFieldUpdateOperationsInput | string
    availableSpaces?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    chargingFeePerHour?: FloatFieldUpdateOperationsInput | number
    carMovement?: CarMovementUncheckedUpdateManyWithoutParkingNestedInput
  }

  export type ParkingUncheckedUpdateManyWithoutUserInput = {
    code?: StringFieldUpdateOperationsInput | string
    parkingName?: StringFieldUpdateOperationsInput | string
    availableSpaces?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    chargingFeePerHour?: FloatFieldUpdateOperationsInput | number
  }

  export type CarMovementCreateManyParkingInput = {
    id?: string
    plateNumber: string
    entryDateTime: Date | string
    exitDateTime?: Date | string
    chargedAmount?: number
  }

  export type CarMovementUpdateWithoutParkingInput = {
    id?: StringFieldUpdateOperationsInput | string
    plateNumber?: StringFieldUpdateOperationsInput | string
    entryDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    exitDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    chargedAmount?: IntFieldUpdateOperationsInput | number
  }

  export type CarMovementUncheckedUpdateWithoutParkingInput = {
    id?: StringFieldUpdateOperationsInput | string
    plateNumber?: StringFieldUpdateOperationsInput | string
    entryDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    exitDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    chargedAmount?: IntFieldUpdateOperationsInput | number
  }

  export type CarMovementUncheckedUpdateManyWithoutParkingInput = {
    id?: StringFieldUpdateOperationsInput | string
    plateNumber?: StringFieldUpdateOperationsInput | string
    entryDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    exitDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    chargedAmount?: IntFieldUpdateOperationsInput | number
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