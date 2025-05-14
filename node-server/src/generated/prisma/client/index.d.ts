
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
 * Model ArchitectureSession
 * 
 */
export type ArchitectureSession = $Result.DefaultSelection<Prisma.$ArchitectureSessionPayload>
/**
 * Model ArchitectureMessage
 * 
 */
export type ArchitectureMessage = $Result.DefaultSelection<Prisma.$ArchitectureMessagePayload>

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
   * `prisma.architectureSession`: Exposes CRUD operations for the **ArchitectureSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ArchitectureSessions
    * const architectureSessions = await prisma.architectureSession.findMany()
    * ```
    */
  get architectureSession(): Prisma.ArchitectureSessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.architectureMessage`: Exposes CRUD operations for the **ArchitectureMessage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ArchitectureMessages
    * const architectureMessages = await prisma.architectureMessage.findMany()
    * ```
    */
  get architectureMessage(): Prisma.ArchitectureMessageDelegate<ExtArgs, ClientOptions>;
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
    ArchitectureSession: 'ArchitectureSession',
    ArchitectureMessage: 'ArchitectureMessage'
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
      modelProps: "user" | "architectureSession" | "architectureMessage"
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
      ArchitectureSession: {
        payload: Prisma.$ArchitectureSessionPayload<ExtArgs>
        fields: Prisma.ArchitectureSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArchitectureSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArchitectureSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArchitectureSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArchitectureSessionPayload>
          }
          findFirst: {
            args: Prisma.ArchitectureSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArchitectureSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArchitectureSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArchitectureSessionPayload>
          }
          findMany: {
            args: Prisma.ArchitectureSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArchitectureSessionPayload>[]
          }
          create: {
            args: Prisma.ArchitectureSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArchitectureSessionPayload>
          }
          createMany: {
            args: Prisma.ArchitectureSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ArchitectureSessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArchitectureSessionPayload>[]
          }
          delete: {
            args: Prisma.ArchitectureSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArchitectureSessionPayload>
          }
          update: {
            args: Prisma.ArchitectureSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArchitectureSessionPayload>
          }
          deleteMany: {
            args: Prisma.ArchitectureSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ArchitectureSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ArchitectureSessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArchitectureSessionPayload>[]
          }
          upsert: {
            args: Prisma.ArchitectureSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArchitectureSessionPayload>
          }
          aggregate: {
            args: Prisma.ArchitectureSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArchitectureSession>
          }
          groupBy: {
            args: Prisma.ArchitectureSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArchitectureSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ArchitectureSessionCountArgs<ExtArgs>
            result: $Utils.Optional<ArchitectureSessionCountAggregateOutputType> | number
          }
        }
      }
      ArchitectureMessage: {
        payload: Prisma.$ArchitectureMessagePayload<ExtArgs>
        fields: Prisma.ArchitectureMessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArchitectureMessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArchitectureMessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArchitectureMessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArchitectureMessagePayload>
          }
          findFirst: {
            args: Prisma.ArchitectureMessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArchitectureMessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArchitectureMessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArchitectureMessagePayload>
          }
          findMany: {
            args: Prisma.ArchitectureMessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArchitectureMessagePayload>[]
          }
          create: {
            args: Prisma.ArchitectureMessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArchitectureMessagePayload>
          }
          createMany: {
            args: Prisma.ArchitectureMessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ArchitectureMessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArchitectureMessagePayload>[]
          }
          delete: {
            args: Prisma.ArchitectureMessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArchitectureMessagePayload>
          }
          update: {
            args: Prisma.ArchitectureMessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArchitectureMessagePayload>
          }
          deleteMany: {
            args: Prisma.ArchitectureMessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ArchitectureMessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ArchitectureMessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArchitectureMessagePayload>[]
          }
          upsert: {
            args: Prisma.ArchitectureMessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArchitectureMessagePayload>
          }
          aggregate: {
            args: Prisma.ArchitectureMessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArchitectureMessage>
          }
          groupBy: {
            args: Prisma.ArchitectureMessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArchitectureMessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ArchitectureMessageCountArgs<ExtArgs>
            result: $Utils.Optional<ArchitectureMessageCountAggregateOutputType> | number
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
    architectureSession?: ArchitectureSessionOmit
    architectureMessage?: ArchitectureMessageOmit
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
    sessions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
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
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArchitectureSessionWhereInput
  }


  /**
   * Count Type ArchitectureSessionCountOutputType
   */

  export type ArchitectureSessionCountOutputType = {
    messages: number
  }

  export type ArchitectureSessionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | ArchitectureSessionCountOutputTypeCountMessagesArgs
  }

  // Custom InputTypes
  /**
   * ArchitectureSessionCountOutputType without action
   */
  export type ArchitectureSessionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArchitectureSessionCountOutputType
     */
    select?: ArchitectureSessionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ArchitectureSessionCountOutputType without action
   */
  export type ArchitectureSessionCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArchitectureMessageWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    createdAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
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
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    email: string
    password: string
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
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
    password?: boolean
    createdAt?: boolean
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      sessions: Prisma.$ArchitectureSessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      password: string
      createdAt: Date
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
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArchitectureSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
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
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArchitectureSession
     */
    select?: ArchitectureSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArchitectureSession
     */
    omit?: ArchitectureSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArchitectureSessionInclude<ExtArgs> | null
    where?: ArchitectureSessionWhereInput
    orderBy?: ArchitectureSessionOrderByWithRelationInput | ArchitectureSessionOrderByWithRelationInput[]
    cursor?: ArchitectureSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArchitectureSessionScalarFieldEnum | ArchitectureSessionScalarFieldEnum[]
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
   * Model ArchitectureSession
   */

  export type AggregateArchitectureSession = {
    _count: ArchitectureSessionCountAggregateOutputType | null
    _avg: ArchitectureSessionAvgAggregateOutputType | null
    _sum: ArchitectureSessionSumAggregateOutputType | null
    _min: ArchitectureSessionMinAggregateOutputType | null
    _max: ArchitectureSessionMaxAggregateOutputType | null
  }

  export type ArchitectureSessionAvgAggregateOutputType = {
    userId: number | null
  }

  export type ArchitectureSessionSumAggregateOutputType = {
    userId: number | null
  }

  export type ArchitectureSessionMinAggregateOutputType = {
    id: string | null
    userId: number | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ArchitectureSessionMaxAggregateOutputType = {
    id: string | null
    userId: number | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ArchitectureSessionCountAggregateOutputType = {
    id: number
    userId: number
    status: number
    result: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ArchitectureSessionAvgAggregateInputType = {
    userId?: true
  }

  export type ArchitectureSessionSumAggregateInputType = {
    userId?: true
  }

  export type ArchitectureSessionMinAggregateInputType = {
    id?: true
    userId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ArchitectureSessionMaxAggregateInputType = {
    id?: true
    userId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ArchitectureSessionCountAggregateInputType = {
    id?: true
    userId?: true
    status?: true
    result?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ArchitectureSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ArchitectureSession to aggregate.
     */
    where?: ArchitectureSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArchitectureSessions to fetch.
     */
    orderBy?: ArchitectureSessionOrderByWithRelationInput | ArchitectureSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArchitectureSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArchitectureSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArchitectureSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ArchitectureSessions
    **/
    _count?: true | ArchitectureSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ArchitectureSessionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ArchitectureSessionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArchitectureSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArchitectureSessionMaxAggregateInputType
  }

  export type GetArchitectureSessionAggregateType<T extends ArchitectureSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateArchitectureSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArchitectureSession[P]>
      : GetScalarType<T[P], AggregateArchitectureSession[P]>
  }




  export type ArchitectureSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArchitectureSessionWhereInput
    orderBy?: ArchitectureSessionOrderByWithAggregationInput | ArchitectureSessionOrderByWithAggregationInput[]
    by: ArchitectureSessionScalarFieldEnum[] | ArchitectureSessionScalarFieldEnum
    having?: ArchitectureSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArchitectureSessionCountAggregateInputType | true
    _avg?: ArchitectureSessionAvgAggregateInputType
    _sum?: ArchitectureSessionSumAggregateInputType
    _min?: ArchitectureSessionMinAggregateInputType
    _max?: ArchitectureSessionMaxAggregateInputType
  }

  export type ArchitectureSessionGroupByOutputType = {
    id: string
    userId: number
    status: string
    result: JsonValue | null
    createdAt: Date
    updatedAt: Date
    _count: ArchitectureSessionCountAggregateOutputType | null
    _avg: ArchitectureSessionAvgAggregateOutputType | null
    _sum: ArchitectureSessionSumAggregateOutputType | null
    _min: ArchitectureSessionMinAggregateOutputType | null
    _max: ArchitectureSessionMaxAggregateOutputType | null
  }

  type GetArchitectureSessionGroupByPayload<T extends ArchitectureSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArchitectureSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArchitectureSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArchitectureSessionGroupByOutputType[P]>
            : GetScalarType<T[P], ArchitectureSessionGroupByOutputType[P]>
        }
      >
    >


  export type ArchitectureSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    status?: boolean
    result?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    messages?: boolean | ArchitectureSession$messagesArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | ArchitectureSessionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["architectureSession"]>

  export type ArchitectureSessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    status?: boolean
    result?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["architectureSession"]>

  export type ArchitectureSessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    status?: boolean
    result?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["architectureSession"]>

  export type ArchitectureSessionSelectScalar = {
    id?: boolean
    userId?: boolean
    status?: boolean
    result?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ArchitectureSessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "status" | "result" | "createdAt" | "updatedAt", ExtArgs["result"]["architectureSession"]>
  export type ArchitectureSessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | ArchitectureSession$messagesArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | ArchitectureSessionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ArchitectureSessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ArchitectureSessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ArchitectureSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ArchitectureSession"
    objects: {
      messages: Prisma.$ArchitectureMessagePayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: number
      status: string
      result: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["architectureSession"]>
    composites: {}
  }

  type ArchitectureSessionGetPayload<S extends boolean | null | undefined | ArchitectureSessionDefaultArgs> = $Result.GetResult<Prisma.$ArchitectureSessionPayload, S>

  type ArchitectureSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ArchitectureSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ArchitectureSessionCountAggregateInputType | true
    }

  export interface ArchitectureSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ArchitectureSession'], meta: { name: 'ArchitectureSession' } }
    /**
     * Find zero or one ArchitectureSession that matches the filter.
     * @param {ArchitectureSessionFindUniqueArgs} args - Arguments to find a ArchitectureSession
     * @example
     * // Get one ArchitectureSession
     * const architectureSession = await prisma.architectureSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ArchitectureSessionFindUniqueArgs>(args: SelectSubset<T, ArchitectureSessionFindUniqueArgs<ExtArgs>>): Prisma__ArchitectureSessionClient<$Result.GetResult<Prisma.$ArchitectureSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ArchitectureSession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ArchitectureSessionFindUniqueOrThrowArgs} args - Arguments to find a ArchitectureSession
     * @example
     * // Get one ArchitectureSession
     * const architectureSession = await prisma.architectureSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ArchitectureSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, ArchitectureSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ArchitectureSessionClient<$Result.GetResult<Prisma.$ArchitectureSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ArchitectureSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArchitectureSessionFindFirstArgs} args - Arguments to find a ArchitectureSession
     * @example
     * // Get one ArchitectureSession
     * const architectureSession = await prisma.architectureSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ArchitectureSessionFindFirstArgs>(args?: SelectSubset<T, ArchitectureSessionFindFirstArgs<ExtArgs>>): Prisma__ArchitectureSessionClient<$Result.GetResult<Prisma.$ArchitectureSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ArchitectureSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArchitectureSessionFindFirstOrThrowArgs} args - Arguments to find a ArchitectureSession
     * @example
     * // Get one ArchitectureSession
     * const architectureSession = await prisma.architectureSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ArchitectureSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, ArchitectureSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ArchitectureSessionClient<$Result.GetResult<Prisma.$ArchitectureSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ArchitectureSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArchitectureSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ArchitectureSessions
     * const architectureSessions = await prisma.architectureSession.findMany()
     * 
     * // Get first 10 ArchitectureSessions
     * const architectureSessions = await prisma.architectureSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const architectureSessionWithIdOnly = await prisma.architectureSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ArchitectureSessionFindManyArgs>(args?: SelectSubset<T, ArchitectureSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArchitectureSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ArchitectureSession.
     * @param {ArchitectureSessionCreateArgs} args - Arguments to create a ArchitectureSession.
     * @example
     * // Create one ArchitectureSession
     * const ArchitectureSession = await prisma.architectureSession.create({
     *   data: {
     *     // ... data to create a ArchitectureSession
     *   }
     * })
     * 
     */
    create<T extends ArchitectureSessionCreateArgs>(args: SelectSubset<T, ArchitectureSessionCreateArgs<ExtArgs>>): Prisma__ArchitectureSessionClient<$Result.GetResult<Prisma.$ArchitectureSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ArchitectureSessions.
     * @param {ArchitectureSessionCreateManyArgs} args - Arguments to create many ArchitectureSessions.
     * @example
     * // Create many ArchitectureSessions
     * const architectureSession = await prisma.architectureSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ArchitectureSessionCreateManyArgs>(args?: SelectSubset<T, ArchitectureSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ArchitectureSessions and returns the data saved in the database.
     * @param {ArchitectureSessionCreateManyAndReturnArgs} args - Arguments to create many ArchitectureSessions.
     * @example
     * // Create many ArchitectureSessions
     * const architectureSession = await prisma.architectureSession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ArchitectureSessions and only return the `id`
     * const architectureSessionWithIdOnly = await prisma.architectureSession.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ArchitectureSessionCreateManyAndReturnArgs>(args?: SelectSubset<T, ArchitectureSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArchitectureSessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ArchitectureSession.
     * @param {ArchitectureSessionDeleteArgs} args - Arguments to delete one ArchitectureSession.
     * @example
     * // Delete one ArchitectureSession
     * const ArchitectureSession = await prisma.architectureSession.delete({
     *   where: {
     *     // ... filter to delete one ArchitectureSession
     *   }
     * })
     * 
     */
    delete<T extends ArchitectureSessionDeleteArgs>(args: SelectSubset<T, ArchitectureSessionDeleteArgs<ExtArgs>>): Prisma__ArchitectureSessionClient<$Result.GetResult<Prisma.$ArchitectureSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ArchitectureSession.
     * @param {ArchitectureSessionUpdateArgs} args - Arguments to update one ArchitectureSession.
     * @example
     * // Update one ArchitectureSession
     * const architectureSession = await prisma.architectureSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ArchitectureSessionUpdateArgs>(args: SelectSubset<T, ArchitectureSessionUpdateArgs<ExtArgs>>): Prisma__ArchitectureSessionClient<$Result.GetResult<Prisma.$ArchitectureSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ArchitectureSessions.
     * @param {ArchitectureSessionDeleteManyArgs} args - Arguments to filter ArchitectureSessions to delete.
     * @example
     * // Delete a few ArchitectureSessions
     * const { count } = await prisma.architectureSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ArchitectureSessionDeleteManyArgs>(args?: SelectSubset<T, ArchitectureSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ArchitectureSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArchitectureSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ArchitectureSessions
     * const architectureSession = await prisma.architectureSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ArchitectureSessionUpdateManyArgs>(args: SelectSubset<T, ArchitectureSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ArchitectureSessions and returns the data updated in the database.
     * @param {ArchitectureSessionUpdateManyAndReturnArgs} args - Arguments to update many ArchitectureSessions.
     * @example
     * // Update many ArchitectureSessions
     * const architectureSession = await prisma.architectureSession.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ArchitectureSessions and only return the `id`
     * const architectureSessionWithIdOnly = await prisma.architectureSession.updateManyAndReturn({
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
    updateManyAndReturn<T extends ArchitectureSessionUpdateManyAndReturnArgs>(args: SelectSubset<T, ArchitectureSessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArchitectureSessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ArchitectureSession.
     * @param {ArchitectureSessionUpsertArgs} args - Arguments to update or create a ArchitectureSession.
     * @example
     * // Update or create a ArchitectureSession
     * const architectureSession = await prisma.architectureSession.upsert({
     *   create: {
     *     // ... data to create a ArchitectureSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ArchitectureSession we want to update
     *   }
     * })
     */
    upsert<T extends ArchitectureSessionUpsertArgs>(args: SelectSubset<T, ArchitectureSessionUpsertArgs<ExtArgs>>): Prisma__ArchitectureSessionClient<$Result.GetResult<Prisma.$ArchitectureSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ArchitectureSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArchitectureSessionCountArgs} args - Arguments to filter ArchitectureSessions to count.
     * @example
     * // Count the number of ArchitectureSessions
     * const count = await prisma.architectureSession.count({
     *   where: {
     *     // ... the filter for the ArchitectureSessions we want to count
     *   }
     * })
    **/
    count<T extends ArchitectureSessionCountArgs>(
      args?: Subset<T, ArchitectureSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArchitectureSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ArchitectureSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArchitectureSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ArchitectureSessionAggregateArgs>(args: Subset<T, ArchitectureSessionAggregateArgs>): Prisma.PrismaPromise<GetArchitectureSessionAggregateType<T>>

    /**
     * Group by ArchitectureSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArchitectureSessionGroupByArgs} args - Group by arguments.
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
      T extends ArchitectureSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArchitectureSessionGroupByArgs['orderBy'] }
        : { orderBy?: ArchitectureSessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ArchitectureSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArchitectureSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ArchitectureSession model
   */
  readonly fields: ArchitectureSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ArchitectureSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArchitectureSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    messages<T extends ArchitectureSession$messagesArgs<ExtArgs> = {}>(args?: Subset<T, ArchitectureSession$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArchitectureMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ArchitectureSession model
   */
  interface ArchitectureSessionFieldRefs {
    readonly id: FieldRef<"ArchitectureSession", 'String'>
    readonly userId: FieldRef<"ArchitectureSession", 'Int'>
    readonly status: FieldRef<"ArchitectureSession", 'String'>
    readonly result: FieldRef<"ArchitectureSession", 'Json'>
    readonly createdAt: FieldRef<"ArchitectureSession", 'DateTime'>
    readonly updatedAt: FieldRef<"ArchitectureSession", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ArchitectureSession findUnique
   */
  export type ArchitectureSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArchitectureSession
     */
    select?: ArchitectureSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArchitectureSession
     */
    omit?: ArchitectureSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArchitectureSessionInclude<ExtArgs> | null
    /**
     * Filter, which ArchitectureSession to fetch.
     */
    where: ArchitectureSessionWhereUniqueInput
  }

  /**
   * ArchitectureSession findUniqueOrThrow
   */
  export type ArchitectureSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArchitectureSession
     */
    select?: ArchitectureSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArchitectureSession
     */
    omit?: ArchitectureSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArchitectureSessionInclude<ExtArgs> | null
    /**
     * Filter, which ArchitectureSession to fetch.
     */
    where: ArchitectureSessionWhereUniqueInput
  }

  /**
   * ArchitectureSession findFirst
   */
  export type ArchitectureSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArchitectureSession
     */
    select?: ArchitectureSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArchitectureSession
     */
    omit?: ArchitectureSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArchitectureSessionInclude<ExtArgs> | null
    /**
     * Filter, which ArchitectureSession to fetch.
     */
    where?: ArchitectureSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArchitectureSessions to fetch.
     */
    orderBy?: ArchitectureSessionOrderByWithRelationInput | ArchitectureSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ArchitectureSessions.
     */
    cursor?: ArchitectureSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArchitectureSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArchitectureSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArchitectureSessions.
     */
    distinct?: ArchitectureSessionScalarFieldEnum | ArchitectureSessionScalarFieldEnum[]
  }

  /**
   * ArchitectureSession findFirstOrThrow
   */
  export type ArchitectureSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArchitectureSession
     */
    select?: ArchitectureSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArchitectureSession
     */
    omit?: ArchitectureSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArchitectureSessionInclude<ExtArgs> | null
    /**
     * Filter, which ArchitectureSession to fetch.
     */
    where?: ArchitectureSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArchitectureSessions to fetch.
     */
    orderBy?: ArchitectureSessionOrderByWithRelationInput | ArchitectureSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ArchitectureSessions.
     */
    cursor?: ArchitectureSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArchitectureSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArchitectureSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArchitectureSessions.
     */
    distinct?: ArchitectureSessionScalarFieldEnum | ArchitectureSessionScalarFieldEnum[]
  }

  /**
   * ArchitectureSession findMany
   */
  export type ArchitectureSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArchitectureSession
     */
    select?: ArchitectureSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArchitectureSession
     */
    omit?: ArchitectureSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArchitectureSessionInclude<ExtArgs> | null
    /**
     * Filter, which ArchitectureSessions to fetch.
     */
    where?: ArchitectureSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArchitectureSessions to fetch.
     */
    orderBy?: ArchitectureSessionOrderByWithRelationInput | ArchitectureSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ArchitectureSessions.
     */
    cursor?: ArchitectureSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArchitectureSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArchitectureSessions.
     */
    skip?: number
    distinct?: ArchitectureSessionScalarFieldEnum | ArchitectureSessionScalarFieldEnum[]
  }

  /**
   * ArchitectureSession create
   */
  export type ArchitectureSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArchitectureSession
     */
    select?: ArchitectureSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArchitectureSession
     */
    omit?: ArchitectureSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArchitectureSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a ArchitectureSession.
     */
    data: XOR<ArchitectureSessionCreateInput, ArchitectureSessionUncheckedCreateInput>
  }

  /**
   * ArchitectureSession createMany
   */
  export type ArchitectureSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ArchitectureSessions.
     */
    data: ArchitectureSessionCreateManyInput | ArchitectureSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ArchitectureSession createManyAndReturn
   */
  export type ArchitectureSessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArchitectureSession
     */
    select?: ArchitectureSessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ArchitectureSession
     */
    omit?: ArchitectureSessionOmit<ExtArgs> | null
    /**
     * The data used to create many ArchitectureSessions.
     */
    data: ArchitectureSessionCreateManyInput | ArchitectureSessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArchitectureSessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ArchitectureSession update
   */
  export type ArchitectureSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArchitectureSession
     */
    select?: ArchitectureSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArchitectureSession
     */
    omit?: ArchitectureSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArchitectureSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a ArchitectureSession.
     */
    data: XOR<ArchitectureSessionUpdateInput, ArchitectureSessionUncheckedUpdateInput>
    /**
     * Choose, which ArchitectureSession to update.
     */
    where: ArchitectureSessionWhereUniqueInput
  }

  /**
   * ArchitectureSession updateMany
   */
  export type ArchitectureSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ArchitectureSessions.
     */
    data: XOR<ArchitectureSessionUpdateManyMutationInput, ArchitectureSessionUncheckedUpdateManyInput>
    /**
     * Filter which ArchitectureSessions to update
     */
    where?: ArchitectureSessionWhereInput
    /**
     * Limit how many ArchitectureSessions to update.
     */
    limit?: number
  }

  /**
   * ArchitectureSession updateManyAndReturn
   */
  export type ArchitectureSessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArchitectureSession
     */
    select?: ArchitectureSessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ArchitectureSession
     */
    omit?: ArchitectureSessionOmit<ExtArgs> | null
    /**
     * The data used to update ArchitectureSessions.
     */
    data: XOR<ArchitectureSessionUpdateManyMutationInput, ArchitectureSessionUncheckedUpdateManyInput>
    /**
     * Filter which ArchitectureSessions to update
     */
    where?: ArchitectureSessionWhereInput
    /**
     * Limit how many ArchitectureSessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArchitectureSessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ArchitectureSession upsert
   */
  export type ArchitectureSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArchitectureSession
     */
    select?: ArchitectureSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArchitectureSession
     */
    omit?: ArchitectureSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArchitectureSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the ArchitectureSession to update in case it exists.
     */
    where: ArchitectureSessionWhereUniqueInput
    /**
     * In case the ArchitectureSession found by the `where` argument doesn't exist, create a new ArchitectureSession with this data.
     */
    create: XOR<ArchitectureSessionCreateInput, ArchitectureSessionUncheckedCreateInput>
    /**
     * In case the ArchitectureSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArchitectureSessionUpdateInput, ArchitectureSessionUncheckedUpdateInput>
  }

  /**
   * ArchitectureSession delete
   */
  export type ArchitectureSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArchitectureSession
     */
    select?: ArchitectureSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArchitectureSession
     */
    omit?: ArchitectureSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArchitectureSessionInclude<ExtArgs> | null
    /**
     * Filter which ArchitectureSession to delete.
     */
    where: ArchitectureSessionWhereUniqueInput
  }

  /**
   * ArchitectureSession deleteMany
   */
  export type ArchitectureSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ArchitectureSessions to delete
     */
    where?: ArchitectureSessionWhereInput
    /**
     * Limit how many ArchitectureSessions to delete.
     */
    limit?: number
  }

  /**
   * ArchitectureSession.messages
   */
  export type ArchitectureSession$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArchitectureMessage
     */
    select?: ArchitectureMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArchitectureMessage
     */
    omit?: ArchitectureMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArchitectureMessageInclude<ExtArgs> | null
    where?: ArchitectureMessageWhereInput
    orderBy?: ArchitectureMessageOrderByWithRelationInput | ArchitectureMessageOrderByWithRelationInput[]
    cursor?: ArchitectureMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArchitectureMessageScalarFieldEnum | ArchitectureMessageScalarFieldEnum[]
  }

  /**
   * ArchitectureSession without action
   */
  export type ArchitectureSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArchitectureSession
     */
    select?: ArchitectureSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArchitectureSession
     */
    omit?: ArchitectureSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArchitectureSessionInclude<ExtArgs> | null
  }


  /**
   * Model ArchitectureMessage
   */

  export type AggregateArchitectureMessage = {
    _count: ArchitectureMessageCountAggregateOutputType | null
    _min: ArchitectureMessageMinAggregateOutputType | null
    _max: ArchitectureMessageMaxAggregateOutputType | null
  }

  export type ArchitectureMessageMinAggregateOutputType = {
    id: string | null
    sessionId: string | null
    role: string | null
    content: string | null
    createdAt: Date | null
  }

  export type ArchitectureMessageMaxAggregateOutputType = {
    id: string | null
    sessionId: string | null
    role: string | null
    content: string | null
    createdAt: Date | null
  }

  export type ArchitectureMessageCountAggregateOutputType = {
    id: number
    sessionId: number
    role: number
    content: number
    createdAt: number
    _all: number
  }


  export type ArchitectureMessageMinAggregateInputType = {
    id?: true
    sessionId?: true
    role?: true
    content?: true
    createdAt?: true
  }

  export type ArchitectureMessageMaxAggregateInputType = {
    id?: true
    sessionId?: true
    role?: true
    content?: true
    createdAt?: true
  }

  export type ArchitectureMessageCountAggregateInputType = {
    id?: true
    sessionId?: true
    role?: true
    content?: true
    createdAt?: true
    _all?: true
  }

  export type ArchitectureMessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ArchitectureMessage to aggregate.
     */
    where?: ArchitectureMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArchitectureMessages to fetch.
     */
    orderBy?: ArchitectureMessageOrderByWithRelationInput | ArchitectureMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArchitectureMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArchitectureMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArchitectureMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ArchitectureMessages
    **/
    _count?: true | ArchitectureMessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArchitectureMessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArchitectureMessageMaxAggregateInputType
  }

  export type GetArchitectureMessageAggregateType<T extends ArchitectureMessageAggregateArgs> = {
        [P in keyof T & keyof AggregateArchitectureMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArchitectureMessage[P]>
      : GetScalarType<T[P], AggregateArchitectureMessage[P]>
  }




  export type ArchitectureMessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArchitectureMessageWhereInput
    orderBy?: ArchitectureMessageOrderByWithAggregationInput | ArchitectureMessageOrderByWithAggregationInput[]
    by: ArchitectureMessageScalarFieldEnum[] | ArchitectureMessageScalarFieldEnum
    having?: ArchitectureMessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArchitectureMessageCountAggregateInputType | true
    _min?: ArchitectureMessageMinAggregateInputType
    _max?: ArchitectureMessageMaxAggregateInputType
  }

  export type ArchitectureMessageGroupByOutputType = {
    id: string
    sessionId: string
    role: string
    content: string
    createdAt: Date
    _count: ArchitectureMessageCountAggregateOutputType | null
    _min: ArchitectureMessageMinAggregateOutputType | null
    _max: ArchitectureMessageMaxAggregateOutputType | null
  }

  type GetArchitectureMessageGroupByPayload<T extends ArchitectureMessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArchitectureMessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArchitectureMessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArchitectureMessageGroupByOutputType[P]>
            : GetScalarType<T[P], ArchitectureMessageGroupByOutputType[P]>
        }
      >
    >


  export type ArchitectureMessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    role?: boolean
    content?: boolean
    createdAt?: boolean
    session?: boolean | ArchitectureSessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["architectureMessage"]>

  export type ArchitectureMessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    role?: boolean
    content?: boolean
    createdAt?: boolean
    session?: boolean | ArchitectureSessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["architectureMessage"]>

  export type ArchitectureMessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    role?: boolean
    content?: boolean
    createdAt?: boolean
    session?: boolean | ArchitectureSessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["architectureMessage"]>

  export type ArchitectureMessageSelectScalar = {
    id?: boolean
    sessionId?: boolean
    role?: boolean
    content?: boolean
    createdAt?: boolean
  }

  export type ArchitectureMessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sessionId" | "role" | "content" | "createdAt", ExtArgs["result"]["architectureMessage"]>
  export type ArchitectureMessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | ArchitectureSessionDefaultArgs<ExtArgs>
  }
  export type ArchitectureMessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | ArchitectureSessionDefaultArgs<ExtArgs>
  }
  export type ArchitectureMessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | ArchitectureSessionDefaultArgs<ExtArgs>
  }

  export type $ArchitectureMessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ArchitectureMessage"
    objects: {
      session: Prisma.$ArchitectureSessionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionId: string
      role: string
      content: string
      createdAt: Date
    }, ExtArgs["result"]["architectureMessage"]>
    composites: {}
  }

  type ArchitectureMessageGetPayload<S extends boolean | null | undefined | ArchitectureMessageDefaultArgs> = $Result.GetResult<Prisma.$ArchitectureMessagePayload, S>

  type ArchitectureMessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ArchitectureMessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ArchitectureMessageCountAggregateInputType | true
    }

  export interface ArchitectureMessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ArchitectureMessage'], meta: { name: 'ArchitectureMessage' } }
    /**
     * Find zero or one ArchitectureMessage that matches the filter.
     * @param {ArchitectureMessageFindUniqueArgs} args - Arguments to find a ArchitectureMessage
     * @example
     * // Get one ArchitectureMessage
     * const architectureMessage = await prisma.architectureMessage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ArchitectureMessageFindUniqueArgs>(args: SelectSubset<T, ArchitectureMessageFindUniqueArgs<ExtArgs>>): Prisma__ArchitectureMessageClient<$Result.GetResult<Prisma.$ArchitectureMessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ArchitectureMessage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ArchitectureMessageFindUniqueOrThrowArgs} args - Arguments to find a ArchitectureMessage
     * @example
     * // Get one ArchitectureMessage
     * const architectureMessage = await prisma.architectureMessage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ArchitectureMessageFindUniqueOrThrowArgs>(args: SelectSubset<T, ArchitectureMessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ArchitectureMessageClient<$Result.GetResult<Prisma.$ArchitectureMessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ArchitectureMessage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArchitectureMessageFindFirstArgs} args - Arguments to find a ArchitectureMessage
     * @example
     * // Get one ArchitectureMessage
     * const architectureMessage = await prisma.architectureMessage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ArchitectureMessageFindFirstArgs>(args?: SelectSubset<T, ArchitectureMessageFindFirstArgs<ExtArgs>>): Prisma__ArchitectureMessageClient<$Result.GetResult<Prisma.$ArchitectureMessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ArchitectureMessage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArchitectureMessageFindFirstOrThrowArgs} args - Arguments to find a ArchitectureMessage
     * @example
     * // Get one ArchitectureMessage
     * const architectureMessage = await prisma.architectureMessage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ArchitectureMessageFindFirstOrThrowArgs>(args?: SelectSubset<T, ArchitectureMessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ArchitectureMessageClient<$Result.GetResult<Prisma.$ArchitectureMessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ArchitectureMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArchitectureMessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ArchitectureMessages
     * const architectureMessages = await prisma.architectureMessage.findMany()
     * 
     * // Get first 10 ArchitectureMessages
     * const architectureMessages = await prisma.architectureMessage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const architectureMessageWithIdOnly = await prisma.architectureMessage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ArchitectureMessageFindManyArgs>(args?: SelectSubset<T, ArchitectureMessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArchitectureMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ArchitectureMessage.
     * @param {ArchitectureMessageCreateArgs} args - Arguments to create a ArchitectureMessage.
     * @example
     * // Create one ArchitectureMessage
     * const ArchitectureMessage = await prisma.architectureMessage.create({
     *   data: {
     *     // ... data to create a ArchitectureMessage
     *   }
     * })
     * 
     */
    create<T extends ArchitectureMessageCreateArgs>(args: SelectSubset<T, ArchitectureMessageCreateArgs<ExtArgs>>): Prisma__ArchitectureMessageClient<$Result.GetResult<Prisma.$ArchitectureMessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ArchitectureMessages.
     * @param {ArchitectureMessageCreateManyArgs} args - Arguments to create many ArchitectureMessages.
     * @example
     * // Create many ArchitectureMessages
     * const architectureMessage = await prisma.architectureMessage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ArchitectureMessageCreateManyArgs>(args?: SelectSubset<T, ArchitectureMessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ArchitectureMessages and returns the data saved in the database.
     * @param {ArchitectureMessageCreateManyAndReturnArgs} args - Arguments to create many ArchitectureMessages.
     * @example
     * // Create many ArchitectureMessages
     * const architectureMessage = await prisma.architectureMessage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ArchitectureMessages and only return the `id`
     * const architectureMessageWithIdOnly = await prisma.architectureMessage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ArchitectureMessageCreateManyAndReturnArgs>(args?: SelectSubset<T, ArchitectureMessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArchitectureMessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ArchitectureMessage.
     * @param {ArchitectureMessageDeleteArgs} args - Arguments to delete one ArchitectureMessage.
     * @example
     * // Delete one ArchitectureMessage
     * const ArchitectureMessage = await prisma.architectureMessage.delete({
     *   where: {
     *     // ... filter to delete one ArchitectureMessage
     *   }
     * })
     * 
     */
    delete<T extends ArchitectureMessageDeleteArgs>(args: SelectSubset<T, ArchitectureMessageDeleteArgs<ExtArgs>>): Prisma__ArchitectureMessageClient<$Result.GetResult<Prisma.$ArchitectureMessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ArchitectureMessage.
     * @param {ArchitectureMessageUpdateArgs} args - Arguments to update one ArchitectureMessage.
     * @example
     * // Update one ArchitectureMessage
     * const architectureMessage = await prisma.architectureMessage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ArchitectureMessageUpdateArgs>(args: SelectSubset<T, ArchitectureMessageUpdateArgs<ExtArgs>>): Prisma__ArchitectureMessageClient<$Result.GetResult<Prisma.$ArchitectureMessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ArchitectureMessages.
     * @param {ArchitectureMessageDeleteManyArgs} args - Arguments to filter ArchitectureMessages to delete.
     * @example
     * // Delete a few ArchitectureMessages
     * const { count } = await prisma.architectureMessage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ArchitectureMessageDeleteManyArgs>(args?: SelectSubset<T, ArchitectureMessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ArchitectureMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArchitectureMessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ArchitectureMessages
     * const architectureMessage = await prisma.architectureMessage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ArchitectureMessageUpdateManyArgs>(args: SelectSubset<T, ArchitectureMessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ArchitectureMessages and returns the data updated in the database.
     * @param {ArchitectureMessageUpdateManyAndReturnArgs} args - Arguments to update many ArchitectureMessages.
     * @example
     * // Update many ArchitectureMessages
     * const architectureMessage = await prisma.architectureMessage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ArchitectureMessages and only return the `id`
     * const architectureMessageWithIdOnly = await prisma.architectureMessage.updateManyAndReturn({
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
    updateManyAndReturn<T extends ArchitectureMessageUpdateManyAndReturnArgs>(args: SelectSubset<T, ArchitectureMessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArchitectureMessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ArchitectureMessage.
     * @param {ArchitectureMessageUpsertArgs} args - Arguments to update or create a ArchitectureMessage.
     * @example
     * // Update or create a ArchitectureMessage
     * const architectureMessage = await prisma.architectureMessage.upsert({
     *   create: {
     *     // ... data to create a ArchitectureMessage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ArchitectureMessage we want to update
     *   }
     * })
     */
    upsert<T extends ArchitectureMessageUpsertArgs>(args: SelectSubset<T, ArchitectureMessageUpsertArgs<ExtArgs>>): Prisma__ArchitectureMessageClient<$Result.GetResult<Prisma.$ArchitectureMessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ArchitectureMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArchitectureMessageCountArgs} args - Arguments to filter ArchitectureMessages to count.
     * @example
     * // Count the number of ArchitectureMessages
     * const count = await prisma.architectureMessage.count({
     *   where: {
     *     // ... the filter for the ArchitectureMessages we want to count
     *   }
     * })
    **/
    count<T extends ArchitectureMessageCountArgs>(
      args?: Subset<T, ArchitectureMessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArchitectureMessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ArchitectureMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArchitectureMessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ArchitectureMessageAggregateArgs>(args: Subset<T, ArchitectureMessageAggregateArgs>): Prisma.PrismaPromise<GetArchitectureMessageAggregateType<T>>

    /**
     * Group by ArchitectureMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArchitectureMessageGroupByArgs} args - Group by arguments.
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
      T extends ArchitectureMessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArchitectureMessageGroupByArgs['orderBy'] }
        : { orderBy?: ArchitectureMessageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ArchitectureMessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArchitectureMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ArchitectureMessage model
   */
  readonly fields: ArchitectureMessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ArchitectureMessage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArchitectureMessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    session<T extends ArchitectureSessionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ArchitectureSessionDefaultArgs<ExtArgs>>): Prisma__ArchitectureSessionClient<$Result.GetResult<Prisma.$ArchitectureSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ArchitectureMessage model
   */
  interface ArchitectureMessageFieldRefs {
    readonly id: FieldRef<"ArchitectureMessage", 'String'>
    readonly sessionId: FieldRef<"ArchitectureMessage", 'String'>
    readonly role: FieldRef<"ArchitectureMessage", 'String'>
    readonly content: FieldRef<"ArchitectureMessage", 'String'>
    readonly createdAt: FieldRef<"ArchitectureMessage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ArchitectureMessage findUnique
   */
  export type ArchitectureMessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArchitectureMessage
     */
    select?: ArchitectureMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArchitectureMessage
     */
    omit?: ArchitectureMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArchitectureMessageInclude<ExtArgs> | null
    /**
     * Filter, which ArchitectureMessage to fetch.
     */
    where: ArchitectureMessageWhereUniqueInput
  }

  /**
   * ArchitectureMessage findUniqueOrThrow
   */
  export type ArchitectureMessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArchitectureMessage
     */
    select?: ArchitectureMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArchitectureMessage
     */
    omit?: ArchitectureMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArchitectureMessageInclude<ExtArgs> | null
    /**
     * Filter, which ArchitectureMessage to fetch.
     */
    where: ArchitectureMessageWhereUniqueInput
  }

  /**
   * ArchitectureMessage findFirst
   */
  export type ArchitectureMessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArchitectureMessage
     */
    select?: ArchitectureMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArchitectureMessage
     */
    omit?: ArchitectureMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArchitectureMessageInclude<ExtArgs> | null
    /**
     * Filter, which ArchitectureMessage to fetch.
     */
    where?: ArchitectureMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArchitectureMessages to fetch.
     */
    orderBy?: ArchitectureMessageOrderByWithRelationInput | ArchitectureMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ArchitectureMessages.
     */
    cursor?: ArchitectureMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArchitectureMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArchitectureMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArchitectureMessages.
     */
    distinct?: ArchitectureMessageScalarFieldEnum | ArchitectureMessageScalarFieldEnum[]
  }

  /**
   * ArchitectureMessage findFirstOrThrow
   */
  export type ArchitectureMessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArchitectureMessage
     */
    select?: ArchitectureMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArchitectureMessage
     */
    omit?: ArchitectureMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArchitectureMessageInclude<ExtArgs> | null
    /**
     * Filter, which ArchitectureMessage to fetch.
     */
    where?: ArchitectureMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArchitectureMessages to fetch.
     */
    orderBy?: ArchitectureMessageOrderByWithRelationInput | ArchitectureMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ArchitectureMessages.
     */
    cursor?: ArchitectureMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArchitectureMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArchitectureMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArchitectureMessages.
     */
    distinct?: ArchitectureMessageScalarFieldEnum | ArchitectureMessageScalarFieldEnum[]
  }

  /**
   * ArchitectureMessage findMany
   */
  export type ArchitectureMessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArchitectureMessage
     */
    select?: ArchitectureMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArchitectureMessage
     */
    omit?: ArchitectureMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArchitectureMessageInclude<ExtArgs> | null
    /**
     * Filter, which ArchitectureMessages to fetch.
     */
    where?: ArchitectureMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArchitectureMessages to fetch.
     */
    orderBy?: ArchitectureMessageOrderByWithRelationInput | ArchitectureMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ArchitectureMessages.
     */
    cursor?: ArchitectureMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArchitectureMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArchitectureMessages.
     */
    skip?: number
    distinct?: ArchitectureMessageScalarFieldEnum | ArchitectureMessageScalarFieldEnum[]
  }

  /**
   * ArchitectureMessage create
   */
  export type ArchitectureMessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArchitectureMessage
     */
    select?: ArchitectureMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArchitectureMessage
     */
    omit?: ArchitectureMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArchitectureMessageInclude<ExtArgs> | null
    /**
     * The data needed to create a ArchitectureMessage.
     */
    data: XOR<ArchitectureMessageCreateInput, ArchitectureMessageUncheckedCreateInput>
  }

  /**
   * ArchitectureMessage createMany
   */
  export type ArchitectureMessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ArchitectureMessages.
     */
    data: ArchitectureMessageCreateManyInput | ArchitectureMessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ArchitectureMessage createManyAndReturn
   */
  export type ArchitectureMessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArchitectureMessage
     */
    select?: ArchitectureMessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ArchitectureMessage
     */
    omit?: ArchitectureMessageOmit<ExtArgs> | null
    /**
     * The data used to create many ArchitectureMessages.
     */
    data: ArchitectureMessageCreateManyInput | ArchitectureMessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArchitectureMessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ArchitectureMessage update
   */
  export type ArchitectureMessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArchitectureMessage
     */
    select?: ArchitectureMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArchitectureMessage
     */
    omit?: ArchitectureMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArchitectureMessageInclude<ExtArgs> | null
    /**
     * The data needed to update a ArchitectureMessage.
     */
    data: XOR<ArchitectureMessageUpdateInput, ArchitectureMessageUncheckedUpdateInput>
    /**
     * Choose, which ArchitectureMessage to update.
     */
    where: ArchitectureMessageWhereUniqueInput
  }

  /**
   * ArchitectureMessage updateMany
   */
  export type ArchitectureMessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ArchitectureMessages.
     */
    data: XOR<ArchitectureMessageUpdateManyMutationInput, ArchitectureMessageUncheckedUpdateManyInput>
    /**
     * Filter which ArchitectureMessages to update
     */
    where?: ArchitectureMessageWhereInput
    /**
     * Limit how many ArchitectureMessages to update.
     */
    limit?: number
  }

  /**
   * ArchitectureMessage updateManyAndReturn
   */
  export type ArchitectureMessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArchitectureMessage
     */
    select?: ArchitectureMessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ArchitectureMessage
     */
    omit?: ArchitectureMessageOmit<ExtArgs> | null
    /**
     * The data used to update ArchitectureMessages.
     */
    data: XOR<ArchitectureMessageUpdateManyMutationInput, ArchitectureMessageUncheckedUpdateManyInput>
    /**
     * Filter which ArchitectureMessages to update
     */
    where?: ArchitectureMessageWhereInput
    /**
     * Limit how many ArchitectureMessages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArchitectureMessageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ArchitectureMessage upsert
   */
  export type ArchitectureMessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArchitectureMessage
     */
    select?: ArchitectureMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArchitectureMessage
     */
    omit?: ArchitectureMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArchitectureMessageInclude<ExtArgs> | null
    /**
     * The filter to search for the ArchitectureMessage to update in case it exists.
     */
    where: ArchitectureMessageWhereUniqueInput
    /**
     * In case the ArchitectureMessage found by the `where` argument doesn't exist, create a new ArchitectureMessage with this data.
     */
    create: XOR<ArchitectureMessageCreateInput, ArchitectureMessageUncheckedCreateInput>
    /**
     * In case the ArchitectureMessage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArchitectureMessageUpdateInput, ArchitectureMessageUncheckedUpdateInput>
  }

  /**
   * ArchitectureMessage delete
   */
  export type ArchitectureMessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArchitectureMessage
     */
    select?: ArchitectureMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArchitectureMessage
     */
    omit?: ArchitectureMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArchitectureMessageInclude<ExtArgs> | null
    /**
     * Filter which ArchitectureMessage to delete.
     */
    where: ArchitectureMessageWhereUniqueInput
  }

  /**
   * ArchitectureMessage deleteMany
   */
  export type ArchitectureMessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ArchitectureMessages to delete
     */
    where?: ArchitectureMessageWhereInput
    /**
     * Limit how many ArchitectureMessages to delete.
     */
    limit?: number
  }

  /**
   * ArchitectureMessage without action
   */
  export type ArchitectureMessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArchitectureMessage
     */
    select?: ArchitectureMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArchitectureMessage
     */
    omit?: ArchitectureMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArchitectureMessageInclude<ExtArgs> | null
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
    password: 'password',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ArchitectureSessionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    status: 'status',
    result: 'result',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ArchitectureSessionScalarFieldEnum = (typeof ArchitectureSessionScalarFieldEnum)[keyof typeof ArchitectureSessionScalarFieldEnum]


  export const ArchitectureMessageScalarFieldEnum: {
    id: 'id',
    sessionId: 'sessionId',
    role: 'role',
    content: 'content',
    createdAt: 'createdAt'
  };

  export type ArchitectureMessageScalarFieldEnum = (typeof ArchitectureMessageScalarFieldEnum)[keyof typeof ArchitectureMessageScalarFieldEnum]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


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
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    sessions?: ArchitectureSessionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    sessions?: ArchitectureSessionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    sessions?: ArchitectureSessionListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ArchitectureSessionWhereInput = {
    AND?: ArchitectureSessionWhereInput | ArchitectureSessionWhereInput[]
    OR?: ArchitectureSessionWhereInput[]
    NOT?: ArchitectureSessionWhereInput | ArchitectureSessionWhereInput[]
    id?: StringFilter<"ArchitectureSession"> | string
    userId?: IntFilter<"ArchitectureSession"> | number
    status?: StringFilter<"ArchitectureSession"> | string
    result?: JsonNullableFilter<"ArchitectureSession">
    createdAt?: DateTimeFilter<"ArchitectureSession"> | Date | string
    updatedAt?: DateTimeFilter<"ArchitectureSession"> | Date | string
    messages?: ArchitectureMessageListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ArchitectureSessionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    result?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    messages?: ArchitectureMessageOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
  }

  export type ArchitectureSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ArchitectureSessionWhereInput | ArchitectureSessionWhereInput[]
    OR?: ArchitectureSessionWhereInput[]
    NOT?: ArchitectureSessionWhereInput | ArchitectureSessionWhereInput[]
    userId?: IntFilter<"ArchitectureSession"> | number
    status?: StringFilter<"ArchitectureSession"> | string
    result?: JsonNullableFilter<"ArchitectureSession">
    createdAt?: DateTimeFilter<"ArchitectureSession"> | Date | string
    updatedAt?: DateTimeFilter<"ArchitectureSession"> | Date | string
    messages?: ArchitectureMessageListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ArchitectureSessionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    result?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ArchitectureSessionCountOrderByAggregateInput
    _avg?: ArchitectureSessionAvgOrderByAggregateInput
    _max?: ArchitectureSessionMaxOrderByAggregateInput
    _min?: ArchitectureSessionMinOrderByAggregateInput
    _sum?: ArchitectureSessionSumOrderByAggregateInput
  }

  export type ArchitectureSessionScalarWhereWithAggregatesInput = {
    AND?: ArchitectureSessionScalarWhereWithAggregatesInput | ArchitectureSessionScalarWhereWithAggregatesInput[]
    OR?: ArchitectureSessionScalarWhereWithAggregatesInput[]
    NOT?: ArchitectureSessionScalarWhereWithAggregatesInput | ArchitectureSessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ArchitectureSession"> | string
    userId?: IntWithAggregatesFilter<"ArchitectureSession"> | number
    status?: StringWithAggregatesFilter<"ArchitectureSession"> | string
    result?: JsonNullableWithAggregatesFilter<"ArchitectureSession">
    createdAt?: DateTimeWithAggregatesFilter<"ArchitectureSession"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ArchitectureSession"> | Date | string
  }

  export type ArchitectureMessageWhereInput = {
    AND?: ArchitectureMessageWhereInput | ArchitectureMessageWhereInput[]
    OR?: ArchitectureMessageWhereInput[]
    NOT?: ArchitectureMessageWhereInput | ArchitectureMessageWhereInput[]
    id?: StringFilter<"ArchitectureMessage"> | string
    sessionId?: StringFilter<"ArchitectureMessage"> | string
    role?: StringFilter<"ArchitectureMessage"> | string
    content?: StringFilter<"ArchitectureMessage"> | string
    createdAt?: DateTimeFilter<"ArchitectureMessage"> | Date | string
    session?: XOR<ArchitectureSessionScalarRelationFilter, ArchitectureSessionWhereInput>
  }

  export type ArchitectureMessageOrderByWithRelationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    role?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    session?: ArchitectureSessionOrderByWithRelationInput
  }

  export type ArchitectureMessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ArchitectureMessageWhereInput | ArchitectureMessageWhereInput[]
    OR?: ArchitectureMessageWhereInput[]
    NOT?: ArchitectureMessageWhereInput | ArchitectureMessageWhereInput[]
    sessionId?: StringFilter<"ArchitectureMessage"> | string
    role?: StringFilter<"ArchitectureMessage"> | string
    content?: StringFilter<"ArchitectureMessage"> | string
    createdAt?: DateTimeFilter<"ArchitectureMessage"> | Date | string
    session?: XOR<ArchitectureSessionScalarRelationFilter, ArchitectureSessionWhereInput>
  }, "id">

  export type ArchitectureMessageOrderByWithAggregationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    role?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    _count?: ArchitectureMessageCountOrderByAggregateInput
    _max?: ArchitectureMessageMaxOrderByAggregateInput
    _min?: ArchitectureMessageMinOrderByAggregateInput
  }

  export type ArchitectureMessageScalarWhereWithAggregatesInput = {
    AND?: ArchitectureMessageScalarWhereWithAggregatesInput | ArchitectureMessageScalarWhereWithAggregatesInput[]
    OR?: ArchitectureMessageScalarWhereWithAggregatesInput[]
    NOT?: ArchitectureMessageScalarWhereWithAggregatesInput | ArchitectureMessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ArchitectureMessage"> | string
    sessionId?: StringWithAggregatesFilter<"ArchitectureMessage"> | string
    role?: StringWithAggregatesFilter<"ArchitectureMessage"> | string
    content?: StringWithAggregatesFilter<"ArchitectureMessage"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ArchitectureMessage"> | Date | string
  }

  export type UserCreateInput = {
    name: string
    email: string
    password: string
    createdAt?: Date | string
    sessions?: ArchitectureSessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    password: string
    createdAt?: Date | string
    sessions?: ArchitectureSessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: ArchitectureSessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: ArchitectureSessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    email: string
    password: string
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArchitectureSessionCreateInput = {
    id?: string
    status?: string
    result?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: ArchitectureMessageCreateNestedManyWithoutSessionInput
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type ArchitectureSessionUncheckedCreateInput = {
    id?: string
    userId: number
    status?: string
    result?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: ArchitectureMessageUncheckedCreateNestedManyWithoutSessionInput
  }

  export type ArchitectureSessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    result?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: ArchitectureMessageUpdateManyWithoutSessionNestedInput
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type ArchitectureSessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    result?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: ArchitectureMessageUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type ArchitectureSessionCreateManyInput = {
    id?: string
    userId: number
    status?: string
    result?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArchitectureSessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    result?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArchitectureSessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    result?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArchitectureMessageCreateInput = {
    id?: string
    role: string
    content: string
    createdAt?: Date | string
    session: ArchitectureSessionCreateNestedOneWithoutMessagesInput
  }

  export type ArchitectureMessageUncheckedCreateInput = {
    id?: string
    sessionId: string
    role: string
    content: string
    createdAt?: Date | string
  }

  export type ArchitectureMessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: ArchitectureSessionUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type ArchitectureMessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArchitectureMessageCreateManyInput = {
    id?: string
    sessionId: string
    role: string
    content: string
    createdAt?: Date | string
  }

  export type ArchitectureMessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArchitectureMessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type ArchitectureSessionListRelationFilter = {
    every?: ArchitectureSessionWhereInput
    some?: ArchitectureSessionWhereInput
    none?: ArchitectureSessionWhereInput
  }

  export type ArchitectureSessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
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

  export type ArchitectureMessageListRelationFilter = {
    every?: ArchitectureMessageWhereInput
    some?: ArchitectureMessageWhereInput
    none?: ArchitectureMessageWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ArchitectureMessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ArchitectureSessionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    result?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArchitectureSessionAvgOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type ArchitectureSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArchitectureSessionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArchitectureSessionSumOrderByAggregateInput = {
    userId?: SortOrder
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

  export type ArchitectureSessionScalarRelationFilter = {
    is?: ArchitectureSessionWhereInput
    isNot?: ArchitectureSessionWhereInput
  }

  export type ArchitectureMessageCountOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    role?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type ArchitectureMessageMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    role?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type ArchitectureMessageMinOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    role?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type ArchitectureSessionCreateNestedManyWithoutUserInput = {
    create?: XOR<ArchitectureSessionCreateWithoutUserInput, ArchitectureSessionUncheckedCreateWithoutUserInput> | ArchitectureSessionCreateWithoutUserInput[] | ArchitectureSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ArchitectureSessionCreateOrConnectWithoutUserInput | ArchitectureSessionCreateOrConnectWithoutUserInput[]
    createMany?: ArchitectureSessionCreateManyUserInputEnvelope
    connect?: ArchitectureSessionWhereUniqueInput | ArchitectureSessionWhereUniqueInput[]
  }

  export type ArchitectureSessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ArchitectureSessionCreateWithoutUserInput, ArchitectureSessionUncheckedCreateWithoutUserInput> | ArchitectureSessionCreateWithoutUserInput[] | ArchitectureSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ArchitectureSessionCreateOrConnectWithoutUserInput | ArchitectureSessionCreateOrConnectWithoutUserInput[]
    createMany?: ArchitectureSessionCreateManyUserInputEnvelope
    connect?: ArchitectureSessionWhereUniqueInput | ArchitectureSessionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ArchitectureSessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<ArchitectureSessionCreateWithoutUserInput, ArchitectureSessionUncheckedCreateWithoutUserInput> | ArchitectureSessionCreateWithoutUserInput[] | ArchitectureSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ArchitectureSessionCreateOrConnectWithoutUserInput | ArchitectureSessionCreateOrConnectWithoutUserInput[]
    upsert?: ArchitectureSessionUpsertWithWhereUniqueWithoutUserInput | ArchitectureSessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ArchitectureSessionCreateManyUserInputEnvelope
    set?: ArchitectureSessionWhereUniqueInput | ArchitectureSessionWhereUniqueInput[]
    disconnect?: ArchitectureSessionWhereUniqueInput | ArchitectureSessionWhereUniqueInput[]
    delete?: ArchitectureSessionWhereUniqueInput | ArchitectureSessionWhereUniqueInput[]
    connect?: ArchitectureSessionWhereUniqueInput | ArchitectureSessionWhereUniqueInput[]
    update?: ArchitectureSessionUpdateWithWhereUniqueWithoutUserInput | ArchitectureSessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ArchitectureSessionUpdateManyWithWhereWithoutUserInput | ArchitectureSessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ArchitectureSessionScalarWhereInput | ArchitectureSessionScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ArchitectureSessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ArchitectureSessionCreateWithoutUserInput, ArchitectureSessionUncheckedCreateWithoutUserInput> | ArchitectureSessionCreateWithoutUserInput[] | ArchitectureSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ArchitectureSessionCreateOrConnectWithoutUserInput | ArchitectureSessionCreateOrConnectWithoutUserInput[]
    upsert?: ArchitectureSessionUpsertWithWhereUniqueWithoutUserInput | ArchitectureSessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ArchitectureSessionCreateManyUserInputEnvelope
    set?: ArchitectureSessionWhereUniqueInput | ArchitectureSessionWhereUniqueInput[]
    disconnect?: ArchitectureSessionWhereUniqueInput | ArchitectureSessionWhereUniqueInput[]
    delete?: ArchitectureSessionWhereUniqueInput | ArchitectureSessionWhereUniqueInput[]
    connect?: ArchitectureSessionWhereUniqueInput | ArchitectureSessionWhereUniqueInput[]
    update?: ArchitectureSessionUpdateWithWhereUniqueWithoutUserInput | ArchitectureSessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ArchitectureSessionUpdateManyWithWhereWithoutUserInput | ArchitectureSessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ArchitectureSessionScalarWhereInput | ArchitectureSessionScalarWhereInput[]
  }

  export type ArchitectureMessageCreateNestedManyWithoutSessionInput = {
    create?: XOR<ArchitectureMessageCreateWithoutSessionInput, ArchitectureMessageUncheckedCreateWithoutSessionInput> | ArchitectureMessageCreateWithoutSessionInput[] | ArchitectureMessageUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: ArchitectureMessageCreateOrConnectWithoutSessionInput | ArchitectureMessageCreateOrConnectWithoutSessionInput[]
    createMany?: ArchitectureMessageCreateManySessionInputEnvelope
    connect?: ArchitectureMessageWhereUniqueInput | ArchitectureMessageWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type ArchitectureMessageUncheckedCreateNestedManyWithoutSessionInput = {
    create?: XOR<ArchitectureMessageCreateWithoutSessionInput, ArchitectureMessageUncheckedCreateWithoutSessionInput> | ArchitectureMessageCreateWithoutSessionInput[] | ArchitectureMessageUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: ArchitectureMessageCreateOrConnectWithoutSessionInput | ArchitectureMessageCreateOrConnectWithoutSessionInput[]
    createMany?: ArchitectureMessageCreateManySessionInputEnvelope
    connect?: ArchitectureMessageWhereUniqueInput | ArchitectureMessageWhereUniqueInput[]
  }

  export type ArchitectureMessageUpdateManyWithoutSessionNestedInput = {
    create?: XOR<ArchitectureMessageCreateWithoutSessionInput, ArchitectureMessageUncheckedCreateWithoutSessionInput> | ArchitectureMessageCreateWithoutSessionInput[] | ArchitectureMessageUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: ArchitectureMessageCreateOrConnectWithoutSessionInput | ArchitectureMessageCreateOrConnectWithoutSessionInput[]
    upsert?: ArchitectureMessageUpsertWithWhereUniqueWithoutSessionInput | ArchitectureMessageUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: ArchitectureMessageCreateManySessionInputEnvelope
    set?: ArchitectureMessageWhereUniqueInput | ArchitectureMessageWhereUniqueInput[]
    disconnect?: ArchitectureMessageWhereUniqueInput | ArchitectureMessageWhereUniqueInput[]
    delete?: ArchitectureMessageWhereUniqueInput | ArchitectureMessageWhereUniqueInput[]
    connect?: ArchitectureMessageWhereUniqueInput | ArchitectureMessageWhereUniqueInput[]
    update?: ArchitectureMessageUpdateWithWhereUniqueWithoutSessionInput | ArchitectureMessageUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: ArchitectureMessageUpdateManyWithWhereWithoutSessionInput | ArchitectureMessageUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: ArchitectureMessageScalarWhereInput | ArchitectureMessageScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type ArchitectureMessageUncheckedUpdateManyWithoutSessionNestedInput = {
    create?: XOR<ArchitectureMessageCreateWithoutSessionInput, ArchitectureMessageUncheckedCreateWithoutSessionInput> | ArchitectureMessageCreateWithoutSessionInput[] | ArchitectureMessageUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: ArchitectureMessageCreateOrConnectWithoutSessionInput | ArchitectureMessageCreateOrConnectWithoutSessionInput[]
    upsert?: ArchitectureMessageUpsertWithWhereUniqueWithoutSessionInput | ArchitectureMessageUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: ArchitectureMessageCreateManySessionInputEnvelope
    set?: ArchitectureMessageWhereUniqueInput | ArchitectureMessageWhereUniqueInput[]
    disconnect?: ArchitectureMessageWhereUniqueInput | ArchitectureMessageWhereUniqueInput[]
    delete?: ArchitectureMessageWhereUniqueInput | ArchitectureMessageWhereUniqueInput[]
    connect?: ArchitectureMessageWhereUniqueInput | ArchitectureMessageWhereUniqueInput[]
    update?: ArchitectureMessageUpdateWithWhereUniqueWithoutSessionInput | ArchitectureMessageUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: ArchitectureMessageUpdateManyWithWhereWithoutSessionInput | ArchitectureMessageUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: ArchitectureMessageScalarWhereInput | ArchitectureMessageScalarWhereInput[]
  }

  export type ArchitectureSessionCreateNestedOneWithoutMessagesInput = {
    create?: XOR<ArchitectureSessionCreateWithoutMessagesInput, ArchitectureSessionUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ArchitectureSessionCreateOrConnectWithoutMessagesInput
    connect?: ArchitectureSessionWhereUniqueInput
  }

  export type ArchitectureSessionUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<ArchitectureSessionCreateWithoutMessagesInput, ArchitectureSessionUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ArchitectureSessionCreateOrConnectWithoutMessagesInput
    upsert?: ArchitectureSessionUpsertWithoutMessagesInput
    connect?: ArchitectureSessionWhereUniqueInput
    update?: XOR<XOR<ArchitectureSessionUpdateToOneWithWhereWithoutMessagesInput, ArchitectureSessionUpdateWithoutMessagesInput>, ArchitectureSessionUncheckedUpdateWithoutMessagesInput>
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

  export type ArchitectureSessionCreateWithoutUserInput = {
    id?: string
    status?: string
    result?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: ArchitectureMessageCreateNestedManyWithoutSessionInput
  }

  export type ArchitectureSessionUncheckedCreateWithoutUserInput = {
    id?: string
    status?: string
    result?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: ArchitectureMessageUncheckedCreateNestedManyWithoutSessionInput
  }

  export type ArchitectureSessionCreateOrConnectWithoutUserInput = {
    where: ArchitectureSessionWhereUniqueInput
    create: XOR<ArchitectureSessionCreateWithoutUserInput, ArchitectureSessionUncheckedCreateWithoutUserInput>
  }

  export type ArchitectureSessionCreateManyUserInputEnvelope = {
    data: ArchitectureSessionCreateManyUserInput | ArchitectureSessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ArchitectureSessionUpsertWithWhereUniqueWithoutUserInput = {
    where: ArchitectureSessionWhereUniqueInput
    update: XOR<ArchitectureSessionUpdateWithoutUserInput, ArchitectureSessionUncheckedUpdateWithoutUserInput>
    create: XOR<ArchitectureSessionCreateWithoutUserInput, ArchitectureSessionUncheckedCreateWithoutUserInput>
  }

  export type ArchitectureSessionUpdateWithWhereUniqueWithoutUserInput = {
    where: ArchitectureSessionWhereUniqueInput
    data: XOR<ArchitectureSessionUpdateWithoutUserInput, ArchitectureSessionUncheckedUpdateWithoutUserInput>
  }

  export type ArchitectureSessionUpdateManyWithWhereWithoutUserInput = {
    where: ArchitectureSessionScalarWhereInput
    data: XOR<ArchitectureSessionUpdateManyMutationInput, ArchitectureSessionUncheckedUpdateManyWithoutUserInput>
  }

  export type ArchitectureSessionScalarWhereInput = {
    AND?: ArchitectureSessionScalarWhereInput | ArchitectureSessionScalarWhereInput[]
    OR?: ArchitectureSessionScalarWhereInput[]
    NOT?: ArchitectureSessionScalarWhereInput | ArchitectureSessionScalarWhereInput[]
    id?: StringFilter<"ArchitectureSession"> | string
    userId?: IntFilter<"ArchitectureSession"> | number
    status?: StringFilter<"ArchitectureSession"> | string
    result?: JsonNullableFilter<"ArchitectureSession">
    createdAt?: DateTimeFilter<"ArchitectureSession"> | Date | string
    updatedAt?: DateTimeFilter<"ArchitectureSession"> | Date | string
  }

  export type ArchitectureMessageCreateWithoutSessionInput = {
    id?: string
    role: string
    content: string
    createdAt?: Date | string
  }

  export type ArchitectureMessageUncheckedCreateWithoutSessionInput = {
    id?: string
    role: string
    content: string
    createdAt?: Date | string
  }

  export type ArchitectureMessageCreateOrConnectWithoutSessionInput = {
    where: ArchitectureMessageWhereUniqueInput
    create: XOR<ArchitectureMessageCreateWithoutSessionInput, ArchitectureMessageUncheckedCreateWithoutSessionInput>
  }

  export type ArchitectureMessageCreateManySessionInputEnvelope = {
    data: ArchitectureMessageCreateManySessionInput | ArchitectureMessageCreateManySessionInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutSessionsInput = {
    name: string
    email: string
    password: string
    createdAt?: Date | string
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: number
    name: string
    email: string
    password: string
    createdAt?: Date | string
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type ArchitectureMessageUpsertWithWhereUniqueWithoutSessionInput = {
    where: ArchitectureMessageWhereUniqueInput
    update: XOR<ArchitectureMessageUpdateWithoutSessionInput, ArchitectureMessageUncheckedUpdateWithoutSessionInput>
    create: XOR<ArchitectureMessageCreateWithoutSessionInput, ArchitectureMessageUncheckedCreateWithoutSessionInput>
  }

  export type ArchitectureMessageUpdateWithWhereUniqueWithoutSessionInput = {
    where: ArchitectureMessageWhereUniqueInput
    data: XOR<ArchitectureMessageUpdateWithoutSessionInput, ArchitectureMessageUncheckedUpdateWithoutSessionInput>
  }

  export type ArchitectureMessageUpdateManyWithWhereWithoutSessionInput = {
    where: ArchitectureMessageScalarWhereInput
    data: XOR<ArchitectureMessageUpdateManyMutationInput, ArchitectureMessageUncheckedUpdateManyWithoutSessionInput>
  }

  export type ArchitectureMessageScalarWhereInput = {
    AND?: ArchitectureMessageScalarWhereInput | ArchitectureMessageScalarWhereInput[]
    OR?: ArchitectureMessageScalarWhereInput[]
    NOT?: ArchitectureMessageScalarWhereInput | ArchitectureMessageScalarWhereInput[]
    id?: StringFilter<"ArchitectureMessage"> | string
    sessionId?: StringFilter<"ArchitectureMessage"> | string
    role?: StringFilter<"ArchitectureMessage"> | string
    content?: StringFilter<"ArchitectureMessage"> | string
    createdAt?: DateTimeFilter<"ArchitectureMessage"> | Date | string
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArchitectureSessionCreateWithoutMessagesInput = {
    id?: string
    status?: string
    result?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type ArchitectureSessionUncheckedCreateWithoutMessagesInput = {
    id?: string
    userId: number
    status?: string
    result?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArchitectureSessionCreateOrConnectWithoutMessagesInput = {
    where: ArchitectureSessionWhereUniqueInput
    create: XOR<ArchitectureSessionCreateWithoutMessagesInput, ArchitectureSessionUncheckedCreateWithoutMessagesInput>
  }

  export type ArchitectureSessionUpsertWithoutMessagesInput = {
    update: XOR<ArchitectureSessionUpdateWithoutMessagesInput, ArchitectureSessionUncheckedUpdateWithoutMessagesInput>
    create: XOR<ArchitectureSessionCreateWithoutMessagesInput, ArchitectureSessionUncheckedCreateWithoutMessagesInput>
    where?: ArchitectureSessionWhereInput
  }

  export type ArchitectureSessionUpdateToOneWithWhereWithoutMessagesInput = {
    where?: ArchitectureSessionWhereInput
    data: XOR<ArchitectureSessionUpdateWithoutMessagesInput, ArchitectureSessionUncheckedUpdateWithoutMessagesInput>
  }

  export type ArchitectureSessionUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    result?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type ArchitectureSessionUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    result?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArchitectureSessionCreateManyUserInput = {
    id?: string
    status?: string
    result?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArchitectureSessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    result?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: ArchitectureMessageUpdateManyWithoutSessionNestedInput
  }

  export type ArchitectureSessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    result?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: ArchitectureMessageUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type ArchitectureSessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    result?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArchitectureMessageCreateManySessionInput = {
    id?: string
    role: string
    content: string
    createdAt?: Date | string
  }

  export type ArchitectureMessageUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArchitectureMessageUncheckedUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArchitectureMessageUncheckedUpdateManyWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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