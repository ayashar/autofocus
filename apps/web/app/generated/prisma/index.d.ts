
/**
 * Client
**/

import * as runtime from './runtime/client.js';
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
 * Model Configuration
 * 
 */
export type Configuration = $Result.DefaultSelection<Prisma.$ConfigurationPayload>
/**
 * Model BlockedApp
 * 
 */
export type BlockedApp = $Result.DefaultSelection<Prisma.$BlockedAppPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model DistractionEvent
 * 
 */
export type DistractionEvent = $Result.DefaultSelection<Prisma.$DistractionEventPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const SessionStatus: {
  ONGOING: 'ONGOING',
  COMPLETED: 'COMPLETED',
  INTERRUPTED: 'INTERRUPTED',
  FAILED: 'FAILED'
};

export type SessionStatus = (typeof SessionStatus)[keyof typeof SessionStatus]

}

export type SessionStatus = $Enums.SessionStatus

export const SessionStatus: typeof $Enums.SessionStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

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
   * `prisma.configuration`: Exposes CRUD operations for the **Configuration** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Configurations
    * const configurations = await prisma.configuration.findMany()
    * ```
    */
  get configuration(): Prisma.ConfigurationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.blockedApp`: Exposes CRUD operations for the **BlockedApp** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BlockedApps
    * const blockedApps = await prisma.blockedApp.findMany()
    * ```
    */
  get blockedApp(): Prisma.BlockedAppDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.distractionEvent`: Exposes CRUD operations for the **DistractionEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DistractionEvents
    * const distractionEvents = await prisma.distractionEvent.findMany()
    * ```
    */
  get distractionEvent(): Prisma.DistractionEventDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    Configuration: 'Configuration',
    BlockedApp: 'BlockedApp',
    Session: 'Session',
    DistractionEvent: 'DistractionEvent'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "configuration" | "blockedApp" | "session" | "distractionEvent"
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
      Configuration: {
        payload: Prisma.$ConfigurationPayload<ExtArgs>
        fields: Prisma.ConfigurationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConfigurationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfigurationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConfigurationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfigurationPayload>
          }
          findFirst: {
            args: Prisma.ConfigurationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfigurationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConfigurationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfigurationPayload>
          }
          findMany: {
            args: Prisma.ConfigurationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfigurationPayload>[]
          }
          create: {
            args: Prisma.ConfigurationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfigurationPayload>
          }
          createMany: {
            args: Prisma.ConfigurationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConfigurationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfigurationPayload>[]
          }
          delete: {
            args: Prisma.ConfigurationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfigurationPayload>
          }
          update: {
            args: Prisma.ConfigurationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfigurationPayload>
          }
          deleteMany: {
            args: Prisma.ConfigurationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConfigurationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ConfigurationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfigurationPayload>[]
          }
          upsert: {
            args: Prisma.ConfigurationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfigurationPayload>
          }
          aggregate: {
            args: Prisma.ConfigurationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConfiguration>
          }
          groupBy: {
            args: Prisma.ConfigurationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConfigurationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConfigurationCountArgs<ExtArgs>
            result: $Utils.Optional<ConfigurationCountAggregateOutputType> | number
          }
        }
      }
      BlockedApp: {
        payload: Prisma.$BlockedAppPayload<ExtArgs>
        fields: Prisma.BlockedAppFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BlockedAppFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockedAppPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BlockedAppFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockedAppPayload>
          }
          findFirst: {
            args: Prisma.BlockedAppFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockedAppPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BlockedAppFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockedAppPayload>
          }
          findMany: {
            args: Prisma.BlockedAppFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockedAppPayload>[]
          }
          create: {
            args: Prisma.BlockedAppCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockedAppPayload>
          }
          createMany: {
            args: Prisma.BlockedAppCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BlockedAppCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockedAppPayload>[]
          }
          delete: {
            args: Prisma.BlockedAppDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockedAppPayload>
          }
          update: {
            args: Prisma.BlockedAppUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockedAppPayload>
          }
          deleteMany: {
            args: Prisma.BlockedAppDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BlockedAppUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BlockedAppUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockedAppPayload>[]
          }
          upsert: {
            args: Prisma.BlockedAppUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockedAppPayload>
          }
          aggregate: {
            args: Prisma.BlockedAppAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBlockedApp>
          }
          groupBy: {
            args: Prisma.BlockedAppGroupByArgs<ExtArgs>
            result: $Utils.Optional<BlockedAppGroupByOutputType>[]
          }
          count: {
            args: Prisma.BlockedAppCountArgs<ExtArgs>
            result: $Utils.Optional<BlockedAppCountAggregateOutputType> | number
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
      DistractionEvent: {
        payload: Prisma.$DistractionEventPayload<ExtArgs>
        fields: Prisma.DistractionEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DistractionEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistractionEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DistractionEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistractionEventPayload>
          }
          findFirst: {
            args: Prisma.DistractionEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistractionEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DistractionEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistractionEventPayload>
          }
          findMany: {
            args: Prisma.DistractionEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistractionEventPayload>[]
          }
          create: {
            args: Prisma.DistractionEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistractionEventPayload>
          }
          createMany: {
            args: Prisma.DistractionEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DistractionEventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistractionEventPayload>[]
          }
          delete: {
            args: Prisma.DistractionEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistractionEventPayload>
          }
          update: {
            args: Prisma.DistractionEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistractionEventPayload>
          }
          deleteMany: {
            args: Prisma.DistractionEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DistractionEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DistractionEventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistractionEventPayload>[]
          }
          upsert: {
            args: Prisma.DistractionEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistractionEventPayload>
          }
          aggregate: {
            args: Prisma.DistractionEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDistractionEvent>
          }
          groupBy: {
            args: Prisma.DistractionEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<DistractionEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.DistractionEventCountArgs<ExtArgs>
            result: $Utils.Optional<DistractionEventCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    configuration?: ConfigurationOmit
    blockedApp?: BlockedAppOmit
    session?: SessionOmit
    distractionEvent?: DistractionEventOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    where?: SessionWhereInput
  }


  /**
   * Count Type ConfigurationCountOutputType
   */

  export type ConfigurationCountOutputType = {
    blockedApps: number
  }

  export type ConfigurationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blockedApps?: boolean | ConfigurationCountOutputTypeCountBlockedAppsArgs
  }

  // Custom InputTypes
  /**
   * ConfigurationCountOutputType without action
   */
  export type ConfigurationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfigurationCountOutputType
     */
    select?: ConfigurationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ConfigurationCountOutputType without action
   */
  export type ConfigurationCountOutputTypeCountBlockedAppsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlockedAppWhereInput
  }


  /**
   * Count Type SessionCountOutputType
   */

  export type SessionCountOutputType = {
    distractions: number
  }

  export type SessionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    distractions?: boolean | SessionCountOutputTypeCountDistractionsArgs
  }

  // Custom InputTypes
  /**
   * SessionCountOutputType without action
   */
  export type SessionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionCountOutputType
     */
    select?: SessionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SessionCountOutputType without action
   */
  export type SessionCountOutputTypeCountDistractionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DistractionEventWhereInput
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
    currentStreak: number | null
    highestStreak: number | null
  }

  export type UserSumAggregateOutputType = {
    currentStreak: number | null
    highestStreak: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    photoId: string | null
    currentStreak: number | null
    highestStreak: number | null
    lastSessionDate: Date | null
    gracePeriodUsed: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    photoId: string | null
    currentStreak: number | null
    highestStreak: number | null
    lastSessionDate: Date | null
    gracePeriodUsed: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    photoId: number
    currentStreak: number
    highestStreak: number
    lastSessionDate: number
    gracePeriodUsed: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    currentStreak?: true
    highestStreak?: true
  }

  export type UserSumAggregateInputType = {
    currentStreak?: true
    highestStreak?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    photoId?: true
    currentStreak?: true
    highestStreak?: true
    lastSessionDate?: true
    gracePeriodUsed?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    photoId?: true
    currentStreak?: true
    highestStreak?: true
    lastSessionDate?: true
    gracePeriodUsed?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    photoId?: true
    currentStreak?: true
    highestStreak?: true
    lastSessionDate?: true
    gracePeriodUsed?: true
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
    id: string
    email: string
    password: string
    name: string
    photoId: string | null
    currentStreak: number
    highestStreak: number
    lastSessionDate: Date | null
    gracePeriodUsed: boolean
    createdAt: Date
    updatedAt: Date
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
    email?: boolean
    password?: boolean
    name?: boolean
    photoId?: boolean
    currentStreak?: boolean
    highestStreak?: boolean
    lastSessionDate?: boolean
    gracePeriodUsed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    configuration?: boolean | User$configurationArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    photoId?: boolean
    currentStreak?: boolean
    highestStreak?: boolean
    lastSessionDate?: boolean
    gracePeriodUsed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    photoId?: boolean
    currentStreak?: boolean
    highestStreak?: boolean
    lastSessionDate?: boolean
    gracePeriodUsed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    photoId?: boolean
    currentStreak?: boolean
    highestStreak?: boolean
    lastSessionDate?: boolean
    gracePeriodUsed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "name" | "photoId" | "currentStreak" | "highestStreak" | "lastSessionDate" | "gracePeriodUsed" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    configuration?: boolean | User$configurationArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      configuration: Prisma.$ConfigurationPayload<ExtArgs> | null
      sessions: Prisma.$SessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      name: string
      photoId: string | null
      currentStreak: number
      highestStreak: number
      lastSessionDate: Date | null
      gracePeriodUsed: boolean
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
    configuration<T extends User$configurationArgs<ExtArgs> = {}>(args?: Subset<T, User$configurationArgs<ExtArgs>>): Prisma__ConfigurationClient<$Result.GetResult<Prisma.$ConfigurationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly photoId: FieldRef<"User", 'String'>
    readonly currentStreak: FieldRef<"User", 'Int'>
    readonly highestStreak: FieldRef<"User", 'Int'>
    readonly lastSessionDate: FieldRef<"User", 'DateTime'>
    readonly gracePeriodUsed: FieldRef<"User", 'Boolean'>
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
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
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
   * User.configuration
   */
  export type User$configurationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Configuration
     */
    select?: ConfigurationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Configuration
     */
    omit?: ConfigurationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConfigurationInclude<ExtArgs> | null
    where?: ConfigurationWhereInput
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
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
   * Model Configuration
   */

  export type AggregateConfiguration = {
    _count: ConfigurationCountAggregateOutputType | null
    _avg: ConfigurationAvgAggregateOutputType | null
    _sum: ConfigurationSumAggregateOutputType | null
    _min: ConfigurationMinAggregateOutputType | null
    _max: ConfigurationMaxAggregateOutputType | null
  }

  export type ConfigurationAvgAggregateOutputType = {
    targetDuration: number | null
  }

  export type ConfigurationSumAggregateOutputType = {
    targetDuration: number | null
  }

  export type ConfigurationMinAggregateOutputType = {
    id: string | null
    userId: string | null
    targetDuration: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ConfigurationMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    targetDuration: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ConfigurationCountAggregateOutputType = {
    id: number
    userId: number
    targetDuration: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ConfigurationAvgAggregateInputType = {
    targetDuration?: true
  }

  export type ConfigurationSumAggregateInputType = {
    targetDuration?: true
  }

  export type ConfigurationMinAggregateInputType = {
    id?: true
    userId?: true
    targetDuration?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ConfigurationMaxAggregateInputType = {
    id?: true
    userId?: true
    targetDuration?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ConfigurationCountAggregateInputType = {
    id?: true
    userId?: true
    targetDuration?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ConfigurationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Configuration to aggregate.
     */
    where?: ConfigurationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Configurations to fetch.
     */
    orderBy?: ConfigurationOrderByWithRelationInput | ConfigurationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConfigurationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Configurations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Configurations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Configurations
    **/
    _count?: true | ConfigurationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ConfigurationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ConfigurationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConfigurationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConfigurationMaxAggregateInputType
  }

  export type GetConfigurationAggregateType<T extends ConfigurationAggregateArgs> = {
        [P in keyof T & keyof AggregateConfiguration]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConfiguration[P]>
      : GetScalarType<T[P], AggregateConfiguration[P]>
  }




  export type ConfigurationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConfigurationWhereInput
    orderBy?: ConfigurationOrderByWithAggregationInput | ConfigurationOrderByWithAggregationInput[]
    by: ConfigurationScalarFieldEnum[] | ConfigurationScalarFieldEnum
    having?: ConfigurationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConfigurationCountAggregateInputType | true
    _avg?: ConfigurationAvgAggregateInputType
    _sum?: ConfigurationSumAggregateInputType
    _min?: ConfigurationMinAggregateInputType
    _max?: ConfigurationMaxAggregateInputType
  }

  export type ConfigurationGroupByOutputType = {
    id: string
    userId: string
    targetDuration: number
    createdAt: Date
    updatedAt: Date
    _count: ConfigurationCountAggregateOutputType | null
    _avg: ConfigurationAvgAggregateOutputType | null
    _sum: ConfigurationSumAggregateOutputType | null
    _min: ConfigurationMinAggregateOutputType | null
    _max: ConfigurationMaxAggregateOutputType | null
  }

  type GetConfigurationGroupByPayload<T extends ConfigurationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConfigurationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConfigurationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConfigurationGroupByOutputType[P]>
            : GetScalarType<T[P], ConfigurationGroupByOutputType[P]>
        }
      >
    >


  export type ConfigurationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    targetDuration?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    blockedApps?: boolean | Configuration$blockedAppsArgs<ExtArgs>
    _count?: boolean | ConfigurationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["configuration"]>

  export type ConfigurationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    targetDuration?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["configuration"]>

  export type ConfigurationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    targetDuration?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["configuration"]>

  export type ConfigurationSelectScalar = {
    id?: boolean
    userId?: boolean
    targetDuration?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ConfigurationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "targetDuration" | "createdAt" | "updatedAt", ExtArgs["result"]["configuration"]>
  export type ConfigurationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    blockedApps?: boolean | Configuration$blockedAppsArgs<ExtArgs>
    _count?: boolean | ConfigurationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ConfigurationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ConfigurationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ConfigurationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Configuration"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      blockedApps: Prisma.$BlockedAppPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      targetDuration: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["configuration"]>
    composites: {}
  }

  type ConfigurationGetPayload<S extends boolean | null | undefined | ConfigurationDefaultArgs> = $Result.GetResult<Prisma.$ConfigurationPayload, S>

  type ConfigurationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConfigurationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConfigurationCountAggregateInputType | true
    }

  export interface ConfigurationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Configuration'], meta: { name: 'Configuration' } }
    /**
     * Find zero or one Configuration that matches the filter.
     * @param {ConfigurationFindUniqueArgs} args - Arguments to find a Configuration
     * @example
     * // Get one Configuration
     * const configuration = await prisma.configuration.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConfigurationFindUniqueArgs>(args: SelectSubset<T, ConfigurationFindUniqueArgs<ExtArgs>>): Prisma__ConfigurationClient<$Result.GetResult<Prisma.$ConfigurationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Configuration that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConfigurationFindUniqueOrThrowArgs} args - Arguments to find a Configuration
     * @example
     * // Get one Configuration
     * const configuration = await prisma.configuration.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConfigurationFindUniqueOrThrowArgs>(args: SelectSubset<T, ConfigurationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConfigurationClient<$Result.GetResult<Prisma.$ConfigurationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Configuration that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfigurationFindFirstArgs} args - Arguments to find a Configuration
     * @example
     * // Get one Configuration
     * const configuration = await prisma.configuration.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConfigurationFindFirstArgs>(args?: SelectSubset<T, ConfigurationFindFirstArgs<ExtArgs>>): Prisma__ConfigurationClient<$Result.GetResult<Prisma.$ConfigurationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Configuration that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfigurationFindFirstOrThrowArgs} args - Arguments to find a Configuration
     * @example
     * // Get one Configuration
     * const configuration = await prisma.configuration.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConfigurationFindFirstOrThrowArgs>(args?: SelectSubset<T, ConfigurationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConfigurationClient<$Result.GetResult<Prisma.$ConfigurationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Configurations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfigurationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Configurations
     * const configurations = await prisma.configuration.findMany()
     * 
     * // Get first 10 Configurations
     * const configurations = await prisma.configuration.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const configurationWithIdOnly = await prisma.configuration.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConfigurationFindManyArgs>(args?: SelectSubset<T, ConfigurationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConfigurationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Configuration.
     * @param {ConfigurationCreateArgs} args - Arguments to create a Configuration.
     * @example
     * // Create one Configuration
     * const Configuration = await prisma.configuration.create({
     *   data: {
     *     // ... data to create a Configuration
     *   }
     * })
     * 
     */
    create<T extends ConfigurationCreateArgs>(args: SelectSubset<T, ConfigurationCreateArgs<ExtArgs>>): Prisma__ConfigurationClient<$Result.GetResult<Prisma.$ConfigurationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Configurations.
     * @param {ConfigurationCreateManyArgs} args - Arguments to create many Configurations.
     * @example
     * // Create many Configurations
     * const configuration = await prisma.configuration.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConfigurationCreateManyArgs>(args?: SelectSubset<T, ConfigurationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Configurations and returns the data saved in the database.
     * @param {ConfigurationCreateManyAndReturnArgs} args - Arguments to create many Configurations.
     * @example
     * // Create many Configurations
     * const configuration = await prisma.configuration.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Configurations and only return the `id`
     * const configurationWithIdOnly = await prisma.configuration.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConfigurationCreateManyAndReturnArgs>(args?: SelectSubset<T, ConfigurationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConfigurationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Configuration.
     * @param {ConfigurationDeleteArgs} args - Arguments to delete one Configuration.
     * @example
     * // Delete one Configuration
     * const Configuration = await prisma.configuration.delete({
     *   where: {
     *     // ... filter to delete one Configuration
     *   }
     * })
     * 
     */
    delete<T extends ConfigurationDeleteArgs>(args: SelectSubset<T, ConfigurationDeleteArgs<ExtArgs>>): Prisma__ConfigurationClient<$Result.GetResult<Prisma.$ConfigurationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Configuration.
     * @param {ConfigurationUpdateArgs} args - Arguments to update one Configuration.
     * @example
     * // Update one Configuration
     * const configuration = await prisma.configuration.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConfigurationUpdateArgs>(args: SelectSubset<T, ConfigurationUpdateArgs<ExtArgs>>): Prisma__ConfigurationClient<$Result.GetResult<Prisma.$ConfigurationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Configurations.
     * @param {ConfigurationDeleteManyArgs} args - Arguments to filter Configurations to delete.
     * @example
     * // Delete a few Configurations
     * const { count } = await prisma.configuration.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConfigurationDeleteManyArgs>(args?: SelectSubset<T, ConfigurationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Configurations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfigurationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Configurations
     * const configuration = await prisma.configuration.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConfigurationUpdateManyArgs>(args: SelectSubset<T, ConfigurationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Configurations and returns the data updated in the database.
     * @param {ConfigurationUpdateManyAndReturnArgs} args - Arguments to update many Configurations.
     * @example
     * // Update many Configurations
     * const configuration = await prisma.configuration.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Configurations and only return the `id`
     * const configurationWithIdOnly = await prisma.configuration.updateManyAndReturn({
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
    updateManyAndReturn<T extends ConfigurationUpdateManyAndReturnArgs>(args: SelectSubset<T, ConfigurationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConfigurationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Configuration.
     * @param {ConfigurationUpsertArgs} args - Arguments to update or create a Configuration.
     * @example
     * // Update or create a Configuration
     * const configuration = await prisma.configuration.upsert({
     *   create: {
     *     // ... data to create a Configuration
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Configuration we want to update
     *   }
     * })
     */
    upsert<T extends ConfigurationUpsertArgs>(args: SelectSubset<T, ConfigurationUpsertArgs<ExtArgs>>): Prisma__ConfigurationClient<$Result.GetResult<Prisma.$ConfigurationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Configurations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfigurationCountArgs} args - Arguments to filter Configurations to count.
     * @example
     * // Count the number of Configurations
     * const count = await prisma.configuration.count({
     *   where: {
     *     // ... the filter for the Configurations we want to count
     *   }
     * })
    **/
    count<T extends ConfigurationCountArgs>(
      args?: Subset<T, ConfigurationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConfigurationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Configuration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfigurationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ConfigurationAggregateArgs>(args: Subset<T, ConfigurationAggregateArgs>): Prisma.PrismaPromise<GetConfigurationAggregateType<T>>

    /**
     * Group by Configuration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfigurationGroupByArgs} args - Group by arguments.
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
      T extends ConfigurationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConfigurationGroupByArgs['orderBy'] }
        : { orderBy?: ConfigurationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ConfigurationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConfigurationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Configuration model
   */
  readonly fields: ConfigurationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Configuration.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConfigurationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    blockedApps<T extends Configuration$blockedAppsArgs<ExtArgs> = {}>(args?: Subset<T, Configuration$blockedAppsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlockedAppPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Configuration model
   */
  interface ConfigurationFieldRefs {
    readonly id: FieldRef<"Configuration", 'String'>
    readonly userId: FieldRef<"Configuration", 'String'>
    readonly targetDuration: FieldRef<"Configuration", 'Int'>
    readonly createdAt: FieldRef<"Configuration", 'DateTime'>
    readonly updatedAt: FieldRef<"Configuration", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Configuration findUnique
   */
  export type ConfigurationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Configuration
     */
    select?: ConfigurationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Configuration
     */
    omit?: ConfigurationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConfigurationInclude<ExtArgs> | null
    /**
     * Filter, which Configuration to fetch.
     */
    where: ConfigurationWhereUniqueInput
  }

  /**
   * Configuration findUniqueOrThrow
   */
  export type ConfigurationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Configuration
     */
    select?: ConfigurationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Configuration
     */
    omit?: ConfigurationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConfigurationInclude<ExtArgs> | null
    /**
     * Filter, which Configuration to fetch.
     */
    where: ConfigurationWhereUniqueInput
  }

  /**
   * Configuration findFirst
   */
  export type ConfigurationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Configuration
     */
    select?: ConfigurationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Configuration
     */
    omit?: ConfigurationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConfigurationInclude<ExtArgs> | null
    /**
     * Filter, which Configuration to fetch.
     */
    where?: ConfigurationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Configurations to fetch.
     */
    orderBy?: ConfigurationOrderByWithRelationInput | ConfigurationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Configurations.
     */
    cursor?: ConfigurationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Configurations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Configurations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Configurations.
     */
    distinct?: ConfigurationScalarFieldEnum | ConfigurationScalarFieldEnum[]
  }

  /**
   * Configuration findFirstOrThrow
   */
  export type ConfigurationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Configuration
     */
    select?: ConfigurationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Configuration
     */
    omit?: ConfigurationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConfigurationInclude<ExtArgs> | null
    /**
     * Filter, which Configuration to fetch.
     */
    where?: ConfigurationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Configurations to fetch.
     */
    orderBy?: ConfigurationOrderByWithRelationInput | ConfigurationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Configurations.
     */
    cursor?: ConfigurationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Configurations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Configurations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Configurations.
     */
    distinct?: ConfigurationScalarFieldEnum | ConfigurationScalarFieldEnum[]
  }

  /**
   * Configuration findMany
   */
  export type ConfigurationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Configuration
     */
    select?: ConfigurationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Configuration
     */
    omit?: ConfigurationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConfigurationInclude<ExtArgs> | null
    /**
     * Filter, which Configurations to fetch.
     */
    where?: ConfigurationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Configurations to fetch.
     */
    orderBy?: ConfigurationOrderByWithRelationInput | ConfigurationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Configurations.
     */
    cursor?: ConfigurationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Configurations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Configurations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Configurations.
     */
    distinct?: ConfigurationScalarFieldEnum | ConfigurationScalarFieldEnum[]
  }

  /**
   * Configuration create
   */
  export type ConfigurationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Configuration
     */
    select?: ConfigurationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Configuration
     */
    omit?: ConfigurationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConfigurationInclude<ExtArgs> | null
    /**
     * The data needed to create a Configuration.
     */
    data: XOR<ConfigurationCreateInput, ConfigurationUncheckedCreateInput>
  }

  /**
   * Configuration createMany
   */
  export type ConfigurationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Configurations.
     */
    data: ConfigurationCreateManyInput | ConfigurationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Configuration createManyAndReturn
   */
  export type ConfigurationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Configuration
     */
    select?: ConfigurationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Configuration
     */
    omit?: ConfigurationOmit<ExtArgs> | null
    /**
     * The data used to create many Configurations.
     */
    data: ConfigurationCreateManyInput | ConfigurationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConfigurationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Configuration update
   */
  export type ConfigurationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Configuration
     */
    select?: ConfigurationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Configuration
     */
    omit?: ConfigurationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConfigurationInclude<ExtArgs> | null
    /**
     * The data needed to update a Configuration.
     */
    data: XOR<ConfigurationUpdateInput, ConfigurationUncheckedUpdateInput>
    /**
     * Choose, which Configuration to update.
     */
    where: ConfigurationWhereUniqueInput
  }

  /**
   * Configuration updateMany
   */
  export type ConfigurationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Configurations.
     */
    data: XOR<ConfigurationUpdateManyMutationInput, ConfigurationUncheckedUpdateManyInput>
    /**
     * Filter which Configurations to update
     */
    where?: ConfigurationWhereInput
    /**
     * Limit how many Configurations to update.
     */
    limit?: number
  }

  /**
   * Configuration updateManyAndReturn
   */
  export type ConfigurationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Configuration
     */
    select?: ConfigurationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Configuration
     */
    omit?: ConfigurationOmit<ExtArgs> | null
    /**
     * The data used to update Configurations.
     */
    data: XOR<ConfigurationUpdateManyMutationInput, ConfigurationUncheckedUpdateManyInput>
    /**
     * Filter which Configurations to update
     */
    where?: ConfigurationWhereInput
    /**
     * Limit how many Configurations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConfigurationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Configuration upsert
   */
  export type ConfigurationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Configuration
     */
    select?: ConfigurationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Configuration
     */
    omit?: ConfigurationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConfigurationInclude<ExtArgs> | null
    /**
     * The filter to search for the Configuration to update in case it exists.
     */
    where: ConfigurationWhereUniqueInput
    /**
     * In case the Configuration found by the `where` argument doesn't exist, create a new Configuration with this data.
     */
    create: XOR<ConfigurationCreateInput, ConfigurationUncheckedCreateInput>
    /**
     * In case the Configuration was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConfigurationUpdateInput, ConfigurationUncheckedUpdateInput>
  }

  /**
   * Configuration delete
   */
  export type ConfigurationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Configuration
     */
    select?: ConfigurationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Configuration
     */
    omit?: ConfigurationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConfigurationInclude<ExtArgs> | null
    /**
     * Filter which Configuration to delete.
     */
    where: ConfigurationWhereUniqueInput
  }

  /**
   * Configuration deleteMany
   */
  export type ConfigurationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Configurations to delete
     */
    where?: ConfigurationWhereInput
    /**
     * Limit how many Configurations to delete.
     */
    limit?: number
  }

  /**
   * Configuration.blockedApps
   */
  export type Configuration$blockedAppsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockedApp
     */
    select?: BlockedAppSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockedApp
     */
    omit?: BlockedAppOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockedAppInclude<ExtArgs> | null
    where?: BlockedAppWhereInput
    orderBy?: BlockedAppOrderByWithRelationInput | BlockedAppOrderByWithRelationInput[]
    cursor?: BlockedAppWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BlockedAppScalarFieldEnum | BlockedAppScalarFieldEnum[]
  }

  /**
   * Configuration without action
   */
  export type ConfigurationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Configuration
     */
    select?: ConfigurationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Configuration
     */
    omit?: ConfigurationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConfigurationInclude<ExtArgs> | null
  }


  /**
   * Model BlockedApp
   */

  export type AggregateBlockedApp = {
    _count: BlockedAppCountAggregateOutputType | null
    _min: BlockedAppMinAggregateOutputType | null
    _max: BlockedAppMaxAggregateOutputType | null
  }

  export type BlockedAppMinAggregateOutputType = {
    id: string | null
    configurationId: string | null
    name: string | null
    packageName: string | null
    createdAt: Date | null
  }

  export type BlockedAppMaxAggregateOutputType = {
    id: string | null
    configurationId: string | null
    name: string | null
    packageName: string | null
    createdAt: Date | null
  }

  export type BlockedAppCountAggregateOutputType = {
    id: number
    configurationId: number
    name: number
    packageName: number
    createdAt: number
    _all: number
  }


  export type BlockedAppMinAggregateInputType = {
    id?: true
    configurationId?: true
    name?: true
    packageName?: true
    createdAt?: true
  }

  export type BlockedAppMaxAggregateInputType = {
    id?: true
    configurationId?: true
    name?: true
    packageName?: true
    createdAt?: true
  }

  export type BlockedAppCountAggregateInputType = {
    id?: true
    configurationId?: true
    name?: true
    packageName?: true
    createdAt?: true
    _all?: true
  }

  export type BlockedAppAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlockedApp to aggregate.
     */
    where?: BlockedAppWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlockedApps to fetch.
     */
    orderBy?: BlockedAppOrderByWithRelationInput | BlockedAppOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BlockedAppWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlockedApps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlockedApps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BlockedApps
    **/
    _count?: true | BlockedAppCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlockedAppMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlockedAppMaxAggregateInputType
  }

  export type GetBlockedAppAggregateType<T extends BlockedAppAggregateArgs> = {
        [P in keyof T & keyof AggregateBlockedApp]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlockedApp[P]>
      : GetScalarType<T[P], AggregateBlockedApp[P]>
  }




  export type BlockedAppGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlockedAppWhereInput
    orderBy?: BlockedAppOrderByWithAggregationInput | BlockedAppOrderByWithAggregationInput[]
    by: BlockedAppScalarFieldEnum[] | BlockedAppScalarFieldEnum
    having?: BlockedAppScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlockedAppCountAggregateInputType | true
    _min?: BlockedAppMinAggregateInputType
    _max?: BlockedAppMaxAggregateInputType
  }

  export type BlockedAppGroupByOutputType = {
    id: string
    configurationId: string
    name: string
    packageName: string | null
    createdAt: Date
    _count: BlockedAppCountAggregateOutputType | null
    _min: BlockedAppMinAggregateOutputType | null
    _max: BlockedAppMaxAggregateOutputType | null
  }

  type GetBlockedAppGroupByPayload<T extends BlockedAppGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BlockedAppGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlockedAppGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlockedAppGroupByOutputType[P]>
            : GetScalarType<T[P], BlockedAppGroupByOutputType[P]>
        }
      >
    >


  export type BlockedAppSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    configurationId?: boolean
    name?: boolean
    packageName?: boolean
    createdAt?: boolean
    configuration?: boolean | ConfigurationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blockedApp"]>

  export type BlockedAppSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    configurationId?: boolean
    name?: boolean
    packageName?: boolean
    createdAt?: boolean
    configuration?: boolean | ConfigurationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blockedApp"]>

  export type BlockedAppSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    configurationId?: boolean
    name?: boolean
    packageName?: boolean
    createdAt?: boolean
    configuration?: boolean | ConfigurationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blockedApp"]>

  export type BlockedAppSelectScalar = {
    id?: boolean
    configurationId?: boolean
    name?: boolean
    packageName?: boolean
    createdAt?: boolean
  }

  export type BlockedAppOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "configurationId" | "name" | "packageName" | "createdAt", ExtArgs["result"]["blockedApp"]>
  export type BlockedAppInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    configuration?: boolean | ConfigurationDefaultArgs<ExtArgs>
  }
  export type BlockedAppIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    configuration?: boolean | ConfigurationDefaultArgs<ExtArgs>
  }
  export type BlockedAppIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    configuration?: boolean | ConfigurationDefaultArgs<ExtArgs>
  }

  export type $BlockedAppPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BlockedApp"
    objects: {
      configuration: Prisma.$ConfigurationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      configurationId: string
      name: string
      packageName: string | null
      createdAt: Date
    }, ExtArgs["result"]["blockedApp"]>
    composites: {}
  }

  type BlockedAppGetPayload<S extends boolean | null | undefined | BlockedAppDefaultArgs> = $Result.GetResult<Prisma.$BlockedAppPayload, S>

  type BlockedAppCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BlockedAppFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BlockedAppCountAggregateInputType | true
    }

  export interface BlockedAppDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BlockedApp'], meta: { name: 'BlockedApp' } }
    /**
     * Find zero or one BlockedApp that matches the filter.
     * @param {BlockedAppFindUniqueArgs} args - Arguments to find a BlockedApp
     * @example
     * // Get one BlockedApp
     * const blockedApp = await prisma.blockedApp.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BlockedAppFindUniqueArgs>(args: SelectSubset<T, BlockedAppFindUniqueArgs<ExtArgs>>): Prisma__BlockedAppClient<$Result.GetResult<Prisma.$BlockedAppPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BlockedApp that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BlockedAppFindUniqueOrThrowArgs} args - Arguments to find a BlockedApp
     * @example
     * // Get one BlockedApp
     * const blockedApp = await prisma.blockedApp.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BlockedAppFindUniqueOrThrowArgs>(args: SelectSubset<T, BlockedAppFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BlockedAppClient<$Result.GetResult<Prisma.$BlockedAppPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BlockedApp that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockedAppFindFirstArgs} args - Arguments to find a BlockedApp
     * @example
     * // Get one BlockedApp
     * const blockedApp = await prisma.blockedApp.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BlockedAppFindFirstArgs>(args?: SelectSubset<T, BlockedAppFindFirstArgs<ExtArgs>>): Prisma__BlockedAppClient<$Result.GetResult<Prisma.$BlockedAppPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BlockedApp that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockedAppFindFirstOrThrowArgs} args - Arguments to find a BlockedApp
     * @example
     * // Get one BlockedApp
     * const blockedApp = await prisma.blockedApp.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BlockedAppFindFirstOrThrowArgs>(args?: SelectSubset<T, BlockedAppFindFirstOrThrowArgs<ExtArgs>>): Prisma__BlockedAppClient<$Result.GetResult<Prisma.$BlockedAppPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BlockedApps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockedAppFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BlockedApps
     * const blockedApps = await prisma.blockedApp.findMany()
     * 
     * // Get first 10 BlockedApps
     * const blockedApps = await prisma.blockedApp.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const blockedAppWithIdOnly = await prisma.blockedApp.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BlockedAppFindManyArgs>(args?: SelectSubset<T, BlockedAppFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlockedAppPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BlockedApp.
     * @param {BlockedAppCreateArgs} args - Arguments to create a BlockedApp.
     * @example
     * // Create one BlockedApp
     * const BlockedApp = await prisma.blockedApp.create({
     *   data: {
     *     // ... data to create a BlockedApp
     *   }
     * })
     * 
     */
    create<T extends BlockedAppCreateArgs>(args: SelectSubset<T, BlockedAppCreateArgs<ExtArgs>>): Prisma__BlockedAppClient<$Result.GetResult<Prisma.$BlockedAppPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BlockedApps.
     * @param {BlockedAppCreateManyArgs} args - Arguments to create many BlockedApps.
     * @example
     * // Create many BlockedApps
     * const blockedApp = await prisma.blockedApp.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BlockedAppCreateManyArgs>(args?: SelectSubset<T, BlockedAppCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BlockedApps and returns the data saved in the database.
     * @param {BlockedAppCreateManyAndReturnArgs} args - Arguments to create many BlockedApps.
     * @example
     * // Create many BlockedApps
     * const blockedApp = await prisma.blockedApp.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BlockedApps and only return the `id`
     * const blockedAppWithIdOnly = await prisma.blockedApp.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BlockedAppCreateManyAndReturnArgs>(args?: SelectSubset<T, BlockedAppCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlockedAppPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BlockedApp.
     * @param {BlockedAppDeleteArgs} args - Arguments to delete one BlockedApp.
     * @example
     * // Delete one BlockedApp
     * const BlockedApp = await prisma.blockedApp.delete({
     *   where: {
     *     // ... filter to delete one BlockedApp
     *   }
     * })
     * 
     */
    delete<T extends BlockedAppDeleteArgs>(args: SelectSubset<T, BlockedAppDeleteArgs<ExtArgs>>): Prisma__BlockedAppClient<$Result.GetResult<Prisma.$BlockedAppPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BlockedApp.
     * @param {BlockedAppUpdateArgs} args - Arguments to update one BlockedApp.
     * @example
     * // Update one BlockedApp
     * const blockedApp = await prisma.blockedApp.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BlockedAppUpdateArgs>(args: SelectSubset<T, BlockedAppUpdateArgs<ExtArgs>>): Prisma__BlockedAppClient<$Result.GetResult<Prisma.$BlockedAppPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BlockedApps.
     * @param {BlockedAppDeleteManyArgs} args - Arguments to filter BlockedApps to delete.
     * @example
     * // Delete a few BlockedApps
     * const { count } = await prisma.blockedApp.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BlockedAppDeleteManyArgs>(args?: SelectSubset<T, BlockedAppDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlockedApps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockedAppUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BlockedApps
     * const blockedApp = await prisma.blockedApp.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BlockedAppUpdateManyArgs>(args: SelectSubset<T, BlockedAppUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlockedApps and returns the data updated in the database.
     * @param {BlockedAppUpdateManyAndReturnArgs} args - Arguments to update many BlockedApps.
     * @example
     * // Update many BlockedApps
     * const blockedApp = await prisma.blockedApp.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BlockedApps and only return the `id`
     * const blockedAppWithIdOnly = await prisma.blockedApp.updateManyAndReturn({
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
    updateManyAndReturn<T extends BlockedAppUpdateManyAndReturnArgs>(args: SelectSubset<T, BlockedAppUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlockedAppPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BlockedApp.
     * @param {BlockedAppUpsertArgs} args - Arguments to update or create a BlockedApp.
     * @example
     * // Update or create a BlockedApp
     * const blockedApp = await prisma.blockedApp.upsert({
     *   create: {
     *     // ... data to create a BlockedApp
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BlockedApp we want to update
     *   }
     * })
     */
    upsert<T extends BlockedAppUpsertArgs>(args: SelectSubset<T, BlockedAppUpsertArgs<ExtArgs>>): Prisma__BlockedAppClient<$Result.GetResult<Prisma.$BlockedAppPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BlockedApps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockedAppCountArgs} args - Arguments to filter BlockedApps to count.
     * @example
     * // Count the number of BlockedApps
     * const count = await prisma.blockedApp.count({
     *   where: {
     *     // ... the filter for the BlockedApps we want to count
     *   }
     * })
    **/
    count<T extends BlockedAppCountArgs>(
      args?: Subset<T, BlockedAppCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlockedAppCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BlockedApp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockedAppAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BlockedAppAggregateArgs>(args: Subset<T, BlockedAppAggregateArgs>): Prisma.PrismaPromise<GetBlockedAppAggregateType<T>>

    /**
     * Group by BlockedApp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockedAppGroupByArgs} args - Group by arguments.
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
      T extends BlockedAppGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BlockedAppGroupByArgs['orderBy'] }
        : { orderBy?: BlockedAppGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BlockedAppGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlockedAppGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BlockedApp model
   */
  readonly fields: BlockedAppFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BlockedApp.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BlockedAppClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    configuration<T extends ConfigurationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ConfigurationDefaultArgs<ExtArgs>>): Prisma__ConfigurationClient<$Result.GetResult<Prisma.$ConfigurationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the BlockedApp model
   */
  interface BlockedAppFieldRefs {
    readonly id: FieldRef<"BlockedApp", 'String'>
    readonly configurationId: FieldRef<"BlockedApp", 'String'>
    readonly name: FieldRef<"BlockedApp", 'String'>
    readonly packageName: FieldRef<"BlockedApp", 'String'>
    readonly createdAt: FieldRef<"BlockedApp", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BlockedApp findUnique
   */
  export type BlockedAppFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockedApp
     */
    select?: BlockedAppSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockedApp
     */
    omit?: BlockedAppOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockedAppInclude<ExtArgs> | null
    /**
     * Filter, which BlockedApp to fetch.
     */
    where: BlockedAppWhereUniqueInput
  }

  /**
   * BlockedApp findUniqueOrThrow
   */
  export type BlockedAppFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockedApp
     */
    select?: BlockedAppSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockedApp
     */
    omit?: BlockedAppOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockedAppInclude<ExtArgs> | null
    /**
     * Filter, which BlockedApp to fetch.
     */
    where: BlockedAppWhereUniqueInput
  }

  /**
   * BlockedApp findFirst
   */
  export type BlockedAppFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockedApp
     */
    select?: BlockedAppSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockedApp
     */
    omit?: BlockedAppOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockedAppInclude<ExtArgs> | null
    /**
     * Filter, which BlockedApp to fetch.
     */
    where?: BlockedAppWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlockedApps to fetch.
     */
    orderBy?: BlockedAppOrderByWithRelationInput | BlockedAppOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlockedApps.
     */
    cursor?: BlockedAppWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlockedApps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlockedApps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlockedApps.
     */
    distinct?: BlockedAppScalarFieldEnum | BlockedAppScalarFieldEnum[]
  }

  /**
   * BlockedApp findFirstOrThrow
   */
  export type BlockedAppFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockedApp
     */
    select?: BlockedAppSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockedApp
     */
    omit?: BlockedAppOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockedAppInclude<ExtArgs> | null
    /**
     * Filter, which BlockedApp to fetch.
     */
    where?: BlockedAppWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlockedApps to fetch.
     */
    orderBy?: BlockedAppOrderByWithRelationInput | BlockedAppOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlockedApps.
     */
    cursor?: BlockedAppWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlockedApps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlockedApps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlockedApps.
     */
    distinct?: BlockedAppScalarFieldEnum | BlockedAppScalarFieldEnum[]
  }

  /**
   * BlockedApp findMany
   */
  export type BlockedAppFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockedApp
     */
    select?: BlockedAppSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockedApp
     */
    omit?: BlockedAppOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockedAppInclude<ExtArgs> | null
    /**
     * Filter, which BlockedApps to fetch.
     */
    where?: BlockedAppWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlockedApps to fetch.
     */
    orderBy?: BlockedAppOrderByWithRelationInput | BlockedAppOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BlockedApps.
     */
    cursor?: BlockedAppWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlockedApps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlockedApps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlockedApps.
     */
    distinct?: BlockedAppScalarFieldEnum | BlockedAppScalarFieldEnum[]
  }

  /**
   * BlockedApp create
   */
  export type BlockedAppCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockedApp
     */
    select?: BlockedAppSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockedApp
     */
    omit?: BlockedAppOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockedAppInclude<ExtArgs> | null
    /**
     * The data needed to create a BlockedApp.
     */
    data: XOR<BlockedAppCreateInput, BlockedAppUncheckedCreateInput>
  }

  /**
   * BlockedApp createMany
   */
  export type BlockedAppCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BlockedApps.
     */
    data: BlockedAppCreateManyInput | BlockedAppCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BlockedApp createManyAndReturn
   */
  export type BlockedAppCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockedApp
     */
    select?: BlockedAppSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BlockedApp
     */
    omit?: BlockedAppOmit<ExtArgs> | null
    /**
     * The data used to create many BlockedApps.
     */
    data: BlockedAppCreateManyInput | BlockedAppCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockedAppIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BlockedApp update
   */
  export type BlockedAppUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockedApp
     */
    select?: BlockedAppSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockedApp
     */
    omit?: BlockedAppOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockedAppInclude<ExtArgs> | null
    /**
     * The data needed to update a BlockedApp.
     */
    data: XOR<BlockedAppUpdateInput, BlockedAppUncheckedUpdateInput>
    /**
     * Choose, which BlockedApp to update.
     */
    where: BlockedAppWhereUniqueInput
  }

  /**
   * BlockedApp updateMany
   */
  export type BlockedAppUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BlockedApps.
     */
    data: XOR<BlockedAppUpdateManyMutationInput, BlockedAppUncheckedUpdateManyInput>
    /**
     * Filter which BlockedApps to update
     */
    where?: BlockedAppWhereInput
    /**
     * Limit how many BlockedApps to update.
     */
    limit?: number
  }

  /**
   * BlockedApp updateManyAndReturn
   */
  export type BlockedAppUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockedApp
     */
    select?: BlockedAppSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BlockedApp
     */
    omit?: BlockedAppOmit<ExtArgs> | null
    /**
     * The data used to update BlockedApps.
     */
    data: XOR<BlockedAppUpdateManyMutationInput, BlockedAppUncheckedUpdateManyInput>
    /**
     * Filter which BlockedApps to update
     */
    where?: BlockedAppWhereInput
    /**
     * Limit how many BlockedApps to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockedAppIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BlockedApp upsert
   */
  export type BlockedAppUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockedApp
     */
    select?: BlockedAppSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockedApp
     */
    omit?: BlockedAppOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockedAppInclude<ExtArgs> | null
    /**
     * The filter to search for the BlockedApp to update in case it exists.
     */
    where: BlockedAppWhereUniqueInput
    /**
     * In case the BlockedApp found by the `where` argument doesn't exist, create a new BlockedApp with this data.
     */
    create: XOR<BlockedAppCreateInput, BlockedAppUncheckedCreateInput>
    /**
     * In case the BlockedApp was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BlockedAppUpdateInput, BlockedAppUncheckedUpdateInput>
  }

  /**
   * BlockedApp delete
   */
  export type BlockedAppDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockedApp
     */
    select?: BlockedAppSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockedApp
     */
    omit?: BlockedAppOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockedAppInclude<ExtArgs> | null
    /**
     * Filter which BlockedApp to delete.
     */
    where: BlockedAppWhereUniqueInput
  }

  /**
   * BlockedApp deleteMany
   */
  export type BlockedAppDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlockedApps to delete
     */
    where?: BlockedAppWhereInput
    /**
     * Limit how many BlockedApps to delete.
     */
    limit?: number
  }

  /**
   * BlockedApp without action
   */
  export type BlockedAppDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockedApp
     */
    select?: BlockedAppSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockedApp
     */
    omit?: BlockedAppOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockedAppInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _avg: SessionAvgAggregateOutputType | null
    _sum: SessionSumAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionAvgAggregateOutputType = {
    targetDuration: number | null
    targetBreakDuration: number | null
    actualDuration: number | null
  }

  export type SessionSumAggregateOutputType = {
    targetDuration: number | null
    targetBreakDuration: number | null
    actualDuration: number | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    startTime: Date | null
    endTime: Date | null
    targetDuration: number | null
    targetBreakDuration: number | null
    actualDuration: number | null
    status: $Enums.SessionStatus | null
    isRecovery: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    startTime: Date | null
    endTime: Date | null
    targetDuration: number | null
    targetBreakDuration: number | null
    actualDuration: number | null
    status: $Enums.SessionStatus | null
    isRecovery: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    userId: number
    startTime: number
    endTime: number
    targetDuration: number
    targetBreakDuration: number
    actualDuration: number
    status: number
    isRecovery: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SessionAvgAggregateInputType = {
    targetDuration?: true
    targetBreakDuration?: true
    actualDuration?: true
  }

  export type SessionSumAggregateInputType = {
    targetDuration?: true
    targetBreakDuration?: true
    actualDuration?: true
  }

  export type SessionMinAggregateInputType = {
    id?: true
    userId?: true
    startTime?: true
    endTime?: true
    targetDuration?: true
    targetBreakDuration?: true
    actualDuration?: true
    status?: true
    isRecovery?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    userId?: true
    startTime?: true
    endTime?: true
    targetDuration?: true
    targetBreakDuration?: true
    actualDuration?: true
    status?: true
    isRecovery?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    userId?: true
    startTime?: true
    endTime?: true
    targetDuration?: true
    targetBreakDuration?: true
    actualDuration?: true
    status?: true
    isRecovery?: true
    createdAt?: true
    updatedAt?: true
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
     * Select which fields to average
    **/
    _avg?: SessionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SessionSumAggregateInputType
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
    _avg?: SessionAvgAggregateInputType
    _sum?: SessionSumAggregateInputType
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    userId: string
    startTime: Date
    endTime: Date | null
    targetDuration: number
    targetBreakDuration: number | null
    actualDuration: number | null
    status: $Enums.SessionStatus
    isRecovery: boolean
    createdAt: Date
    updatedAt: Date
    _count: SessionCountAggregateOutputType | null
    _avg: SessionAvgAggregateOutputType | null
    _sum: SessionSumAggregateOutputType | null
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
    userId?: boolean
    startTime?: boolean
    endTime?: boolean
    targetDuration?: boolean
    targetBreakDuration?: boolean
    actualDuration?: boolean
    status?: boolean
    isRecovery?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    distractions?: boolean | Session$distractionsArgs<ExtArgs>
    _count?: boolean | SessionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    startTime?: boolean
    endTime?: boolean
    targetDuration?: boolean
    targetBreakDuration?: boolean
    actualDuration?: boolean
    status?: boolean
    isRecovery?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    startTime?: boolean
    endTime?: boolean
    targetDuration?: boolean
    targetBreakDuration?: boolean
    actualDuration?: boolean
    status?: boolean
    isRecovery?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    userId?: boolean
    startTime?: boolean
    endTime?: boolean
    targetDuration?: boolean
    targetBreakDuration?: boolean
    actualDuration?: boolean
    status?: boolean
    isRecovery?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "startTime" | "endTime" | "targetDuration" | "targetBreakDuration" | "actualDuration" | "status" | "isRecovery" | "createdAt" | "updatedAt", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    distractions?: boolean | Session$distractionsArgs<ExtArgs>
    _count?: boolean | SessionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      distractions: Prisma.$DistractionEventPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      startTime: Date
      endTime: Date | null
      targetDuration: number
      targetBreakDuration: number | null
      actualDuration: number | null
      status: $Enums.SessionStatus
      isRecovery: boolean
      createdAt: Date
      updatedAt: Date
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
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    distractions<T extends Session$distractionsArgs<ExtArgs> = {}>(args?: Subset<T, Session$distractionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DistractionEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly userId: FieldRef<"Session", 'String'>
    readonly startTime: FieldRef<"Session", 'DateTime'>
    readonly endTime: FieldRef<"Session", 'DateTime'>
    readonly targetDuration: FieldRef<"Session", 'Int'>
    readonly targetBreakDuration: FieldRef<"Session", 'Int'>
    readonly actualDuration: FieldRef<"Session", 'Int'>
    readonly status: FieldRef<"Session", 'SessionStatus'>
    readonly isRecovery: FieldRef<"Session", 'Boolean'>
    readonly createdAt: FieldRef<"Session", 'DateTime'>
    readonly updatedAt: FieldRef<"Session", 'DateTime'>
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
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
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
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
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
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
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
   * Session.distractions
   */
  export type Session$distractionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DistractionEvent
     */
    select?: DistractionEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DistractionEvent
     */
    omit?: DistractionEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistractionEventInclude<ExtArgs> | null
    where?: DistractionEventWhereInput
    orderBy?: DistractionEventOrderByWithRelationInput | DistractionEventOrderByWithRelationInput[]
    cursor?: DistractionEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DistractionEventScalarFieldEnum | DistractionEventScalarFieldEnum[]
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model DistractionEvent
   */

  export type AggregateDistractionEvent = {
    _count: DistractionEventCountAggregateOutputType | null
    _avg: DistractionEventAvgAggregateOutputType | null
    _sum: DistractionEventSumAggregateOutputType | null
    _min: DistractionEventMinAggregateOutputType | null
    _max: DistractionEventMaxAggregateOutputType | null
  }

  export type DistractionEventAvgAggregateOutputType = {
    levelReached: number | null
  }

  export type DistractionEventSumAggregateOutputType = {
    levelReached: number | null
  }

  export type DistractionEventMinAggregateOutputType = {
    id: string | null
    sessionId: string | null
    levelReached: number | null
    isResolved: boolean | null
    timestamp: Date | null
  }

  export type DistractionEventMaxAggregateOutputType = {
    id: string | null
    sessionId: string | null
    levelReached: number | null
    isResolved: boolean | null
    timestamp: Date | null
  }

  export type DistractionEventCountAggregateOutputType = {
    id: number
    sessionId: number
    levelReached: number
    isResolved: number
    timestamp: number
    _all: number
  }


  export type DistractionEventAvgAggregateInputType = {
    levelReached?: true
  }

  export type DistractionEventSumAggregateInputType = {
    levelReached?: true
  }

  export type DistractionEventMinAggregateInputType = {
    id?: true
    sessionId?: true
    levelReached?: true
    isResolved?: true
    timestamp?: true
  }

  export type DistractionEventMaxAggregateInputType = {
    id?: true
    sessionId?: true
    levelReached?: true
    isResolved?: true
    timestamp?: true
  }

  export type DistractionEventCountAggregateInputType = {
    id?: true
    sessionId?: true
    levelReached?: true
    isResolved?: true
    timestamp?: true
    _all?: true
  }

  export type DistractionEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DistractionEvent to aggregate.
     */
    where?: DistractionEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DistractionEvents to fetch.
     */
    orderBy?: DistractionEventOrderByWithRelationInput | DistractionEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DistractionEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DistractionEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DistractionEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DistractionEvents
    **/
    _count?: true | DistractionEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DistractionEventAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DistractionEventSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DistractionEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DistractionEventMaxAggregateInputType
  }

  export type GetDistractionEventAggregateType<T extends DistractionEventAggregateArgs> = {
        [P in keyof T & keyof AggregateDistractionEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDistractionEvent[P]>
      : GetScalarType<T[P], AggregateDistractionEvent[P]>
  }




  export type DistractionEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DistractionEventWhereInput
    orderBy?: DistractionEventOrderByWithAggregationInput | DistractionEventOrderByWithAggregationInput[]
    by: DistractionEventScalarFieldEnum[] | DistractionEventScalarFieldEnum
    having?: DistractionEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DistractionEventCountAggregateInputType | true
    _avg?: DistractionEventAvgAggregateInputType
    _sum?: DistractionEventSumAggregateInputType
    _min?: DistractionEventMinAggregateInputType
    _max?: DistractionEventMaxAggregateInputType
  }

  export type DistractionEventGroupByOutputType = {
    id: string
    sessionId: string
    levelReached: number
    isResolved: boolean
    timestamp: Date
    _count: DistractionEventCountAggregateOutputType | null
    _avg: DistractionEventAvgAggregateOutputType | null
    _sum: DistractionEventSumAggregateOutputType | null
    _min: DistractionEventMinAggregateOutputType | null
    _max: DistractionEventMaxAggregateOutputType | null
  }

  type GetDistractionEventGroupByPayload<T extends DistractionEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DistractionEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DistractionEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DistractionEventGroupByOutputType[P]>
            : GetScalarType<T[P], DistractionEventGroupByOutputType[P]>
        }
      >
    >


  export type DistractionEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    levelReached?: boolean
    isResolved?: boolean
    timestamp?: boolean
    session?: boolean | SessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["distractionEvent"]>

  export type DistractionEventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    levelReached?: boolean
    isResolved?: boolean
    timestamp?: boolean
    session?: boolean | SessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["distractionEvent"]>

  export type DistractionEventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    levelReached?: boolean
    isResolved?: boolean
    timestamp?: boolean
    session?: boolean | SessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["distractionEvent"]>

  export type DistractionEventSelectScalar = {
    id?: boolean
    sessionId?: boolean
    levelReached?: boolean
    isResolved?: boolean
    timestamp?: boolean
  }

  export type DistractionEventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sessionId" | "levelReached" | "isResolved" | "timestamp", ExtArgs["result"]["distractionEvent"]>
  export type DistractionEventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | SessionDefaultArgs<ExtArgs>
  }
  export type DistractionEventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | SessionDefaultArgs<ExtArgs>
  }
  export type DistractionEventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | SessionDefaultArgs<ExtArgs>
  }

  export type $DistractionEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DistractionEvent"
    objects: {
      session: Prisma.$SessionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionId: string
      levelReached: number
      isResolved: boolean
      timestamp: Date
    }, ExtArgs["result"]["distractionEvent"]>
    composites: {}
  }

  type DistractionEventGetPayload<S extends boolean | null | undefined | DistractionEventDefaultArgs> = $Result.GetResult<Prisma.$DistractionEventPayload, S>

  type DistractionEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DistractionEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DistractionEventCountAggregateInputType | true
    }

  export interface DistractionEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DistractionEvent'], meta: { name: 'DistractionEvent' } }
    /**
     * Find zero or one DistractionEvent that matches the filter.
     * @param {DistractionEventFindUniqueArgs} args - Arguments to find a DistractionEvent
     * @example
     * // Get one DistractionEvent
     * const distractionEvent = await prisma.distractionEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DistractionEventFindUniqueArgs>(args: SelectSubset<T, DistractionEventFindUniqueArgs<ExtArgs>>): Prisma__DistractionEventClient<$Result.GetResult<Prisma.$DistractionEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DistractionEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DistractionEventFindUniqueOrThrowArgs} args - Arguments to find a DistractionEvent
     * @example
     * // Get one DistractionEvent
     * const distractionEvent = await prisma.distractionEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DistractionEventFindUniqueOrThrowArgs>(args: SelectSubset<T, DistractionEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DistractionEventClient<$Result.GetResult<Prisma.$DistractionEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DistractionEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistractionEventFindFirstArgs} args - Arguments to find a DistractionEvent
     * @example
     * // Get one DistractionEvent
     * const distractionEvent = await prisma.distractionEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DistractionEventFindFirstArgs>(args?: SelectSubset<T, DistractionEventFindFirstArgs<ExtArgs>>): Prisma__DistractionEventClient<$Result.GetResult<Prisma.$DistractionEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DistractionEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistractionEventFindFirstOrThrowArgs} args - Arguments to find a DistractionEvent
     * @example
     * // Get one DistractionEvent
     * const distractionEvent = await prisma.distractionEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DistractionEventFindFirstOrThrowArgs>(args?: SelectSubset<T, DistractionEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__DistractionEventClient<$Result.GetResult<Prisma.$DistractionEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DistractionEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistractionEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DistractionEvents
     * const distractionEvents = await prisma.distractionEvent.findMany()
     * 
     * // Get first 10 DistractionEvents
     * const distractionEvents = await prisma.distractionEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const distractionEventWithIdOnly = await prisma.distractionEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DistractionEventFindManyArgs>(args?: SelectSubset<T, DistractionEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DistractionEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DistractionEvent.
     * @param {DistractionEventCreateArgs} args - Arguments to create a DistractionEvent.
     * @example
     * // Create one DistractionEvent
     * const DistractionEvent = await prisma.distractionEvent.create({
     *   data: {
     *     // ... data to create a DistractionEvent
     *   }
     * })
     * 
     */
    create<T extends DistractionEventCreateArgs>(args: SelectSubset<T, DistractionEventCreateArgs<ExtArgs>>): Prisma__DistractionEventClient<$Result.GetResult<Prisma.$DistractionEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DistractionEvents.
     * @param {DistractionEventCreateManyArgs} args - Arguments to create many DistractionEvents.
     * @example
     * // Create many DistractionEvents
     * const distractionEvent = await prisma.distractionEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DistractionEventCreateManyArgs>(args?: SelectSubset<T, DistractionEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DistractionEvents and returns the data saved in the database.
     * @param {DistractionEventCreateManyAndReturnArgs} args - Arguments to create many DistractionEvents.
     * @example
     * // Create many DistractionEvents
     * const distractionEvent = await prisma.distractionEvent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DistractionEvents and only return the `id`
     * const distractionEventWithIdOnly = await prisma.distractionEvent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DistractionEventCreateManyAndReturnArgs>(args?: SelectSubset<T, DistractionEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DistractionEventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DistractionEvent.
     * @param {DistractionEventDeleteArgs} args - Arguments to delete one DistractionEvent.
     * @example
     * // Delete one DistractionEvent
     * const DistractionEvent = await prisma.distractionEvent.delete({
     *   where: {
     *     // ... filter to delete one DistractionEvent
     *   }
     * })
     * 
     */
    delete<T extends DistractionEventDeleteArgs>(args: SelectSubset<T, DistractionEventDeleteArgs<ExtArgs>>): Prisma__DistractionEventClient<$Result.GetResult<Prisma.$DistractionEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DistractionEvent.
     * @param {DistractionEventUpdateArgs} args - Arguments to update one DistractionEvent.
     * @example
     * // Update one DistractionEvent
     * const distractionEvent = await prisma.distractionEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DistractionEventUpdateArgs>(args: SelectSubset<T, DistractionEventUpdateArgs<ExtArgs>>): Prisma__DistractionEventClient<$Result.GetResult<Prisma.$DistractionEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DistractionEvents.
     * @param {DistractionEventDeleteManyArgs} args - Arguments to filter DistractionEvents to delete.
     * @example
     * // Delete a few DistractionEvents
     * const { count } = await prisma.distractionEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DistractionEventDeleteManyArgs>(args?: SelectSubset<T, DistractionEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DistractionEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistractionEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DistractionEvents
     * const distractionEvent = await prisma.distractionEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DistractionEventUpdateManyArgs>(args: SelectSubset<T, DistractionEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DistractionEvents and returns the data updated in the database.
     * @param {DistractionEventUpdateManyAndReturnArgs} args - Arguments to update many DistractionEvents.
     * @example
     * // Update many DistractionEvents
     * const distractionEvent = await prisma.distractionEvent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DistractionEvents and only return the `id`
     * const distractionEventWithIdOnly = await prisma.distractionEvent.updateManyAndReturn({
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
    updateManyAndReturn<T extends DistractionEventUpdateManyAndReturnArgs>(args: SelectSubset<T, DistractionEventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DistractionEventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DistractionEvent.
     * @param {DistractionEventUpsertArgs} args - Arguments to update or create a DistractionEvent.
     * @example
     * // Update or create a DistractionEvent
     * const distractionEvent = await prisma.distractionEvent.upsert({
     *   create: {
     *     // ... data to create a DistractionEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DistractionEvent we want to update
     *   }
     * })
     */
    upsert<T extends DistractionEventUpsertArgs>(args: SelectSubset<T, DistractionEventUpsertArgs<ExtArgs>>): Prisma__DistractionEventClient<$Result.GetResult<Prisma.$DistractionEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DistractionEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistractionEventCountArgs} args - Arguments to filter DistractionEvents to count.
     * @example
     * // Count the number of DistractionEvents
     * const count = await prisma.distractionEvent.count({
     *   where: {
     *     // ... the filter for the DistractionEvents we want to count
     *   }
     * })
    **/
    count<T extends DistractionEventCountArgs>(
      args?: Subset<T, DistractionEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DistractionEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DistractionEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistractionEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DistractionEventAggregateArgs>(args: Subset<T, DistractionEventAggregateArgs>): Prisma.PrismaPromise<GetDistractionEventAggregateType<T>>

    /**
     * Group by DistractionEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistractionEventGroupByArgs} args - Group by arguments.
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
      T extends DistractionEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DistractionEventGroupByArgs['orderBy'] }
        : { orderBy?: DistractionEventGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DistractionEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDistractionEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DistractionEvent model
   */
  readonly fields: DistractionEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DistractionEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DistractionEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    session<T extends SessionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SessionDefaultArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the DistractionEvent model
   */
  interface DistractionEventFieldRefs {
    readonly id: FieldRef<"DistractionEvent", 'String'>
    readonly sessionId: FieldRef<"DistractionEvent", 'String'>
    readonly levelReached: FieldRef<"DistractionEvent", 'Int'>
    readonly isResolved: FieldRef<"DistractionEvent", 'Boolean'>
    readonly timestamp: FieldRef<"DistractionEvent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DistractionEvent findUnique
   */
  export type DistractionEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DistractionEvent
     */
    select?: DistractionEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DistractionEvent
     */
    omit?: DistractionEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistractionEventInclude<ExtArgs> | null
    /**
     * Filter, which DistractionEvent to fetch.
     */
    where: DistractionEventWhereUniqueInput
  }

  /**
   * DistractionEvent findUniqueOrThrow
   */
  export type DistractionEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DistractionEvent
     */
    select?: DistractionEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DistractionEvent
     */
    omit?: DistractionEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistractionEventInclude<ExtArgs> | null
    /**
     * Filter, which DistractionEvent to fetch.
     */
    where: DistractionEventWhereUniqueInput
  }

  /**
   * DistractionEvent findFirst
   */
  export type DistractionEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DistractionEvent
     */
    select?: DistractionEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DistractionEvent
     */
    omit?: DistractionEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistractionEventInclude<ExtArgs> | null
    /**
     * Filter, which DistractionEvent to fetch.
     */
    where?: DistractionEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DistractionEvents to fetch.
     */
    orderBy?: DistractionEventOrderByWithRelationInput | DistractionEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DistractionEvents.
     */
    cursor?: DistractionEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DistractionEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DistractionEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DistractionEvents.
     */
    distinct?: DistractionEventScalarFieldEnum | DistractionEventScalarFieldEnum[]
  }

  /**
   * DistractionEvent findFirstOrThrow
   */
  export type DistractionEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DistractionEvent
     */
    select?: DistractionEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DistractionEvent
     */
    omit?: DistractionEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistractionEventInclude<ExtArgs> | null
    /**
     * Filter, which DistractionEvent to fetch.
     */
    where?: DistractionEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DistractionEvents to fetch.
     */
    orderBy?: DistractionEventOrderByWithRelationInput | DistractionEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DistractionEvents.
     */
    cursor?: DistractionEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DistractionEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DistractionEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DistractionEvents.
     */
    distinct?: DistractionEventScalarFieldEnum | DistractionEventScalarFieldEnum[]
  }

  /**
   * DistractionEvent findMany
   */
  export type DistractionEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DistractionEvent
     */
    select?: DistractionEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DistractionEvent
     */
    omit?: DistractionEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistractionEventInclude<ExtArgs> | null
    /**
     * Filter, which DistractionEvents to fetch.
     */
    where?: DistractionEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DistractionEvents to fetch.
     */
    orderBy?: DistractionEventOrderByWithRelationInput | DistractionEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DistractionEvents.
     */
    cursor?: DistractionEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DistractionEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DistractionEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DistractionEvents.
     */
    distinct?: DistractionEventScalarFieldEnum | DistractionEventScalarFieldEnum[]
  }

  /**
   * DistractionEvent create
   */
  export type DistractionEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DistractionEvent
     */
    select?: DistractionEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DistractionEvent
     */
    omit?: DistractionEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistractionEventInclude<ExtArgs> | null
    /**
     * The data needed to create a DistractionEvent.
     */
    data: XOR<DistractionEventCreateInput, DistractionEventUncheckedCreateInput>
  }

  /**
   * DistractionEvent createMany
   */
  export type DistractionEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DistractionEvents.
     */
    data: DistractionEventCreateManyInput | DistractionEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DistractionEvent createManyAndReturn
   */
  export type DistractionEventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DistractionEvent
     */
    select?: DistractionEventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DistractionEvent
     */
    omit?: DistractionEventOmit<ExtArgs> | null
    /**
     * The data used to create many DistractionEvents.
     */
    data: DistractionEventCreateManyInput | DistractionEventCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistractionEventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DistractionEvent update
   */
  export type DistractionEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DistractionEvent
     */
    select?: DistractionEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DistractionEvent
     */
    omit?: DistractionEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistractionEventInclude<ExtArgs> | null
    /**
     * The data needed to update a DistractionEvent.
     */
    data: XOR<DistractionEventUpdateInput, DistractionEventUncheckedUpdateInput>
    /**
     * Choose, which DistractionEvent to update.
     */
    where: DistractionEventWhereUniqueInput
  }

  /**
   * DistractionEvent updateMany
   */
  export type DistractionEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DistractionEvents.
     */
    data: XOR<DistractionEventUpdateManyMutationInput, DistractionEventUncheckedUpdateManyInput>
    /**
     * Filter which DistractionEvents to update
     */
    where?: DistractionEventWhereInput
    /**
     * Limit how many DistractionEvents to update.
     */
    limit?: number
  }

  /**
   * DistractionEvent updateManyAndReturn
   */
  export type DistractionEventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DistractionEvent
     */
    select?: DistractionEventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DistractionEvent
     */
    omit?: DistractionEventOmit<ExtArgs> | null
    /**
     * The data used to update DistractionEvents.
     */
    data: XOR<DistractionEventUpdateManyMutationInput, DistractionEventUncheckedUpdateManyInput>
    /**
     * Filter which DistractionEvents to update
     */
    where?: DistractionEventWhereInput
    /**
     * Limit how many DistractionEvents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistractionEventIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DistractionEvent upsert
   */
  export type DistractionEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DistractionEvent
     */
    select?: DistractionEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DistractionEvent
     */
    omit?: DistractionEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistractionEventInclude<ExtArgs> | null
    /**
     * The filter to search for the DistractionEvent to update in case it exists.
     */
    where: DistractionEventWhereUniqueInput
    /**
     * In case the DistractionEvent found by the `where` argument doesn't exist, create a new DistractionEvent with this data.
     */
    create: XOR<DistractionEventCreateInput, DistractionEventUncheckedCreateInput>
    /**
     * In case the DistractionEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DistractionEventUpdateInput, DistractionEventUncheckedUpdateInput>
  }

  /**
   * DistractionEvent delete
   */
  export type DistractionEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DistractionEvent
     */
    select?: DistractionEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DistractionEvent
     */
    omit?: DistractionEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistractionEventInclude<ExtArgs> | null
    /**
     * Filter which DistractionEvent to delete.
     */
    where: DistractionEventWhereUniqueInput
  }

  /**
   * DistractionEvent deleteMany
   */
  export type DistractionEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DistractionEvents to delete
     */
    where?: DistractionEventWhereInput
    /**
     * Limit how many DistractionEvents to delete.
     */
    limit?: number
  }

  /**
   * DistractionEvent without action
   */
  export type DistractionEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DistractionEvent
     */
    select?: DistractionEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DistractionEvent
     */
    omit?: DistractionEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistractionEventInclude<ExtArgs> | null
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
    email: 'email',
    password: 'password',
    name: 'name',
    photoId: 'photoId',
    currentStreak: 'currentStreak',
    highestStreak: 'highestStreak',
    lastSessionDate: 'lastSessionDate',
    gracePeriodUsed: 'gracePeriodUsed',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ConfigurationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    targetDuration: 'targetDuration',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ConfigurationScalarFieldEnum = (typeof ConfigurationScalarFieldEnum)[keyof typeof ConfigurationScalarFieldEnum]


  export const BlockedAppScalarFieldEnum: {
    id: 'id',
    configurationId: 'configurationId',
    name: 'name',
    packageName: 'packageName',
    createdAt: 'createdAt'
  };

  export type BlockedAppScalarFieldEnum = (typeof BlockedAppScalarFieldEnum)[keyof typeof BlockedAppScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    startTime: 'startTime',
    endTime: 'endTime',
    targetDuration: 'targetDuration',
    targetBreakDuration: 'targetBreakDuration',
    actualDuration: 'actualDuration',
    status: 'status',
    isRecovery: 'isRecovery',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const DistractionEventScalarFieldEnum: {
    id: 'id',
    sessionId: 'sessionId',
    levelReached: 'levelReached',
    isResolved: 'isResolved',
    timestamp: 'timestamp'
  };

  export type DistractionEventScalarFieldEnum = (typeof DistractionEventScalarFieldEnum)[keyof typeof DistractionEventScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'SessionStatus'
   */
  export type EnumSessionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SessionStatus'>
    


  /**
   * Reference to a field of type 'SessionStatus[]'
   */
  export type ListEnumSessionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SessionStatus[]'>
    


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
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    photoId?: StringNullableFilter<"User"> | string | null
    currentStreak?: IntFilter<"User"> | number
    highestStreak?: IntFilter<"User"> | number
    lastSessionDate?: DateTimeNullableFilter<"User"> | Date | string | null
    gracePeriodUsed?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    configuration?: XOR<ConfigurationNullableScalarRelationFilter, ConfigurationWhereInput> | null
    sessions?: SessionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    photoId?: SortOrderInput | SortOrder
    currentStreak?: SortOrder
    highestStreak?: SortOrder
    lastSessionDate?: SortOrderInput | SortOrder
    gracePeriodUsed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    configuration?: ConfigurationOrderByWithRelationInput
    sessions?: SessionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    photoId?: StringNullableFilter<"User"> | string | null
    currentStreak?: IntFilter<"User"> | number
    highestStreak?: IntFilter<"User"> | number
    lastSessionDate?: DateTimeNullableFilter<"User"> | Date | string | null
    gracePeriodUsed?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    configuration?: XOR<ConfigurationNullableScalarRelationFilter, ConfigurationWhereInput> | null
    sessions?: SessionListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    photoId?: SortOrderInput | SortOrder
    currentStreak?: SortOrder
    highestStreak?: SortOrder
    lastSessionDate?: SortOrderInput | SortOrder
    gracePeriodUsed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    photoId?: StringNullableWithAggregatesFilter<"User"> | string | null
    currentStreak?: IntWithAggregatesFilter<"User"> | number
    highestStreak?: IntWithAggregatesFilter<"User"> | number
    lastSessionDate?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    gracePeriodUsed?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ConfigurationWhereInput = {
    AND?: ConfigurationWhereInput | ConfigurationWhereInput[]
    OR?: ConfigurationWhereInput[]
    NOT?: ConfigurationWhereInput | ConfigurationWhereInput[]
    id?: StringFilter<"Configuration"> | string
    userId?: StringFilter<"Configuration"> | string
    targetDuration?: IntFilter<"Configuration"> | number
    createdAt?: DateTimeFilter<"Configuration"> | Date | string
    updatedAt?: DateTimeFilter<"Configuration"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    blockedApps?: BlockedAppListRelationFilter
  }

  export type ConfigurationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    targetDuration?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    blockedApps?: BlockedAppOrderByRelationAggregateInput
  }

  export type ConfigurationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: ConfigurationWhereInput | ConfigurationWhereInput[]
    OR?: ConfigurationWhereInput[]
    NOT?: ConfigurationWhereInput | ConfigurationWhereInput[]
    targetDuration?: IntFilter<"Configuration"> | number
    createdAt?: DateTimeFilter<"Configuration"> | Date | string
    updatedAt?: DateTimeFilter<"Configuration"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    blockedApps?: BlockedAppListRelationFilter
  }, "id" | "userId">

  export type ConfigurationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    targetDuration?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ConfigurationCountOrderByAggregateInput
    _avg?: ConfigurationAvgOrderByAggregateInput
    _max?: ConfigurationMaxOrderByAggregateInput
    _min?: ConfigurationMinOrderByAggregateInput
    _sum?: ConfigurationSumOrderByAggregateInput
  }

  export type ConfigurationScalarWhereWithAggregatesInput = {
    AND?: ConfigurationScalarWhereWithAggregatesInput | ConfigurationScalarWhereWithAggregatesInput[]
    OR?: ConfigurationScalarWhereWithAggregatesInput[]
    NOT?: ConfigurationScalarWhereWithAggregatesInput | ConfigurationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Configuration"> | string
    userId?: StringWithAggregatesFilter<"Configuration"> | string
    targetDuration?: IntWithAggregatesFilter<"Configuration"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Configuration"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Configuration"> | Date | string
  }

  export type BlockedAppWhereInput = {
    AND?: BlockedAppWhereInput | BlockedAppWhereInput[]
    OR?: BlockedAppWhereInput[]
    NOT?: BlockedAppWhereInput | BlockedAppWhereInput[]
    id?: StringFilter<"BlockedApp"> | string
    configurationId?: StringFilter<"BlockedApp"> | string
    name?: StringFilter<"BlockedApp"> | string
    packageName?: StringNullableFilter<"BlockedApp"> | string | null
    createdAt?: DateTimeFilter<"BlockedApp"> | Date | string
    configuration?: XOR<ConfigurationScalarRelationFilter, ConfigurationWhereInput>
  }

  export type BlockedAppOrderByWithRelationInput = {
    id?: SortOrder
    configurationId?: SortOrder
    name?: SortOrder
    packageName?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    configuration?: ConfigurationOrderByWithRelationInput
  }

  export type BlockedAppWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BlockedAppWhereInput | BlockedAppWhereInput[]
    OR?: BlockedAppWhereInput[]
    NOT?: BlockedAppWhereInput | BlockedAppWhereInput[]
    configurationId?: StringFilter<"BlockedApp"> | string
    name?: StringFilter<"BlockedApp"> | string
    packageName?: StringNullableFilter<"BlockedApp"> | string | null
    createdAt?: DateTimeFilter<"BlockedApp"> | Date | string
    configuration?: XOR<ConfigurationScalarRelationFilter, ConfigurationWhereInput>
  }, "id">

  export type BlockedAppOrderByWithAggregationInput = {
    id?: SortOrder
    configurationId?: SortOrder
    name?: SortOrder
    packageName?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: BlockedAppCountOrderByAggregateInput
    _max?: BlockedAppMaxOrderByAggregateInput
    _min?: BlockedAppMinOrderByAggregateInput
  }

  export type BlockedAppScalarWhereWithAggregatesInput = {
    AND?: BlockedAppScalarWhereWithAggregatesInput | BlockedAppScalarWhereWithAggregatesInput[]
    OR?: BlockedAppScalarWhereWithAggregatesInput[]
    NOT?: BlockedAppScalarWhereWithAggregatesInput | BlockedAppScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BlockedApp"> | string
    configurationId?: StringWithAggregatesFilter<"BlockedApp"> | string
    name?: StringWithAggregatesFilter<"BlockedApp"> | string
    packageName?: StringNullableWithAggregatesFilter<"BlockedApp"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"BlockedApp"> | Date | string
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    startTime?: DateTimeFilter<"Session"> | Date | string
    endTime?: DateTimeNullableFilter<"Session"> | Date | string | null
    targetDuration?: IntFilter<"Session"> | number
    targetBreakDuration?: IntNullableFilter<"Session"> | number | null
    actualDuration?: IntNullableFilter<"Session"> | number | null
    status?: EnumSessionStatusFilter<"Session"> | $Enums.SessionStatus
    isRecovery?: BoolFilter<"Session"> | boolean
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    distractions?: DistractionEventListRelationFilter
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrderInput | SortOrder
    targetDuration?: SortOrder
    targetBreakDuration?: SortOrderInput | SortOrder
    actualDuration?: SortOrderInput | SortOrder
    status?: SortOrder
    isRecovery?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    distractions?: DistractionEventOrderByRelationAggregateInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringFilter<"Session"> | string
    startTime?: DateTimeFilter<"Session"> | Date | string
    endTime?: DateTimeNullableFilter<"Session"> | Date | string | null
    targetDuration?: IntFilter<"Session"> | number
    targetBreakDuration?: IntNullableFilter<"Session"> | number | null
    actualDuration?: IntNullableFilter<"Session"> | number | null
    status?: EnumSessionStatusFilter<"Session"> | $Enums.SessionStatus
    isRecovery?: BoolFilter<"Session"> | boolean
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    distractions?: DistractionEventListRelationFilter
  }, "id">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrderInput | SortOrder
    targetDuration?: SortOrder
    targetBreakDuration?: SortOrderInput | SortOrder
    actualDuration?: SortOrderInput | SortOrder
    status?: SortOrder
    isRecovery?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _avg?: SessionAvgOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
    _sum?: SessionSumOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    startTime?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    endTime?: DateTimeNullableWithAggregatesFilter<"Session"> | Date | string | null
    targetDuration?: IntWithAggregatesFilter<"Session"> | number
    targetBreakDuration?: IntNullableWithAggregatesFilter<"Session"> | number | null
    actualDuration?: IntNullableWithAggregatesFilter<"Session"> | number | null
    status?: EnumSessionStatusWithAggregatesFilter<"Session"> | $Enums.SessionStatus
    isRecovery?: BoolWithAggregatesFilter<"Session"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type DistractionEventWhereInput = {
    AND?: DistractionEventWhereInput | DistractionEventWhereInput[]
    OR?: DistractionEventWhereInput[]
    NOT?: DistractionEventWhereInput | DistractionEventWhereInput[]
    id?: StringFilter<"DistractionEvent"> | string
    sessionId?: StringFilter<"DistractionEvent"> | string
    levelReached?: IntFilter<"DistractionEvent"> | number
    isResolved?: BoolFilter<"DistractionEvent"> | boolean
    timestamp?: DateTimeFilter<"DistractionEvent"> | Date | string
    session?: XOR<SessionScalarRelationFilter, SessionWhereInput>
  }

  export type DistractionEventOrderByWithRelationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    levelReached?: SortOrder
    isResolved?: SortOrder
    timestamp?: SortOrder
    session?: SessionOrderByWithRelationInput
  }

  export type DistractionEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DistractionEventWhereInput | DistractionEventWhereInput[]
    OR?: DistractionEventWhereInput[]
    NOT?: DistractionEventWhereInput | DistractionEventWhereInput[]
    sessionId?: StringFilter<"DistractionEvent"> | string
    levelReached?: IntFilter<"DistractionEvent"> | number
    isResolved?: BoolFilter<"DistractionEvent"> | boolean
    timestamp?: DateTimeFilter<"DistractionEvent"> | Date | string
    session?: XOR<SessionScalarRelationFilter, SessionWhereInput>
  }, "id">

  export type DistractionEventOrderByWithAggregationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    levelReached?: SortOrder
    isResolved?: SortOrder
    timestamp?: SortOrder
    _count?: DistractionEventCountOrderByAggregateInput
    _avg?: DistractionEventAvgOrderByAggregateInput
    _max?: DistractionEventMaxOrderByAggregateInput
    _min?: DistractionEventMinOrderByAggregateInput
    _sum?: DistractionEventSumOrderByAggregateInput
  }

  export type DistractionEventScalarWhereWithAggregatesInput = {
    AND?: DistractionEventScalarWhereWithAggregatesInput | DistractionEventScalarWhereWithAggregatesInput[]
    OR?: DistractionEventScalarWhereWithAggregatesInput[]
    NOT?: DistractionEventScalarWhereWithAggregatesInput | DistractionEventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DistractionEvent"> | string
    sessionId?: StringWithAggregatesFilter<"DistractionEvent"> | string
    levelReached?: IntWithAggregatesFilter<"DistractionEvent"> | number
    isResolved?: BoolWithAggregatesFilter<"DistractionEvent"> | boolean
    timestamp?: DateTimeWithAggregatesFilter<"DistractionEvent"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    name: string
    photoId?: string | null
    currentStreak?: number
    highestStreak?: number
    lastSessionDate?: Date | string | null
    gracePeriodUsed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    configuration?: ConfigurationCreateNestedOneWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    name: string
    photoId?: string | null
    currentStreak?: number
    highestStreak?: number
    lastSessionDate?: Date | string | null
    gracePeriodUsed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    configuration?: ConfigurationUncheckedCreateNestedOneWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    photoId?: NullableStringFieldUpdateOperationsInput | string | null
    currentStreak?: IntFieldUpdateOperationsInput | number
    highestStreak?: IntFieldUpdateOperationsInput | number
    lastSessionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gracePeriodUsed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    configuration?: ConfigurationUpdateOneWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    photoId?: NullableStringFieldUpdateOperationsInput | string | null
    currentStreak?: IntFieldUpdateOperationsInput | number
    highestStreak?: IntFieldUpdateOperationsInput | number
    lastSessionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gracePeriodUsed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    configuration?: ConfigurationUncheckedUpdateOneWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    name: string
    photoId?: string | null
    currentStreak?: number
    highestStreak?: number
    lastSessionDate?: Date | string | null
    gracePeriodUsed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    photoId?: NullableStringFieldUpdateOperationsInput | string | null
    currentStreak?: IntFieldUpdateOperationsInput | number
    highestStreak?: IntFieldUpdateOperationsInput | number
    lastSessionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gracePeriodUsed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    photoId?: NullableStringFieldUpdateOperationsInput | string | null
    currentStreak?: IntFieldUpdateOperationsInput | number
    highestStreak?: IntFieldUpdateOperationsInput | number
    lastSessionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gracePeriodUsed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConfigurationCreateInput = {
    id?: string
    targetDuration?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutConfigurationInput
    blockedApps?: BlockedAppCreateNestedManyWithoutConfigurationInput
  }

  export type ConfigurationUncheckedCreateInput = {
    id?: string
    userId: string
    targetDuration?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    blockedApps?: BlockedAppUncheckedCreateNestedManyWithoutConfigurationInput
  }

  export type ConfigurationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    targetDuration?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutConfigurationNestedInput
    blockedApps?: BlockedAppUpdateManyWithoutConfigurationNestedInput
  }

  export type ConfigurationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    targetDuration?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blockedApps?: BlockedAppUncheckedUpdateManyWithoutConfigurationNestedInput
  }

  export type ConfigurationCreateManyInput = {
    id?: string
    userId: string
    targetDuration?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConfigurationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    targetDuration?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConfigurationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    targetDuration?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlockedAppCreateInput = {
    id?: string
    name: string
    packageName?: string | null
    createdAt?: Date | string
    configuration: ConfigurationCreateNestedOneWithoutBlockedAppsInput
  }

  export type BlockedAppUncheckedCreateInput = {
    id?: string
    configurationId: string
    name: string
    packageName?: string | null
    createdAt?: Date | string
  }

  export type BlockedAppUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    packageName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    configuration?: ConfigurationUpdateOneRequiredWithoutBlockedAppsNestedInput
  }

  export type BlockedAppUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    configurationId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    packageName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlockedAppCreateManyInput = {
    id?: string
    configurationId: string
    name: string
    packageName?: string | null
    createdAt?: Date | string
  }

  export type BlockedAppUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    packageName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlockedAppUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    configurationId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    packageName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateInput = {
    id?: string
    startTime?: Date | string
    endTime?: Date | string | null
    targetDuration: number
    targetBreakDuration?: number | null
    actualDuration?: number | null
    status?: $Enums.SessionStatus
    isRecovery?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
    distractions?: DistractionEventCreateNestedManyWithoutSessionInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    userId: string
    startTime?: Date | string
    endTime?: Date | string | null
    targetDuration: number
    targetBreakDuration?: number | null
    actualDuration?: number | null
    status?: $Enums.SessionStatus
    isRecovery?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    distractions?: DistractionEventUncheckedCreateNestedManyWithoutSessionInput
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    targetDuration?: IntFieldUpdateOperationsInput | number
    targetBreakDuration?: NullableIntFieldUpdateOperationsInput | number | null
    actualDuration?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    isRecovery?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
    distractions?: DistractionEventUpdateManyWithoutSessionNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    targetDuration?: IntFieldUpdateOperationsInput | number
    targetBreakDuration?: NullableIntFieldUpdateOperationsInput | number | null
    actualDuration?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    isRecovery?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    distractions?: DistractionEventUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type SessionCreateManyInput = {
    id?: string
    userId: string
    startTime?: Date | string
    endTime?: Date | string | null
    targetDuration: number
    targetBreakDuration?: number | null
    actualDuration?: number | null
    status?: $Enums.SessionStatus
    isRecovery?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    targetDuration?: IntFieldUpdateOperationsInput | number
    targetBreakDuration?: NullableIntFieldUpdateOperationsInput | number | null
    actualDuration?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    isRecovery?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    targetDuration?: IntFieldUpdateOperationsInput | number
    targetBreakDuration?: NullableIntFieldUpdateOperationsInput | number | null
    actualDuration?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    isRecovery?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DistractionEventCreateInput = {
    id?: string
    levelReached: number
    isResolved: boolean
    timestamp?: Date | string
    session: SessionCreateNestedOneWithoutDistractionsInput
  }

  export type DistractionEventUncheckedCreateInput = {
    id?: string
    sessionId: string
    levelReached: number
    isResolved: boolean
    timestamp?: Date | string
  }

  export type DistractionEventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    levelReached?: IntFieldUpdateOperationsInput | number
    isResolved?: BoolFieldUpdateOperationsInput | boolean
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: SessionUpdateOneRequiredWithoutDistractionsNestedInput
  }

  export type DistractionEventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    levelReached?: IntFieldUpdateOperationsInput | number
    isResolved?: BoolFieldUpdateOperationsInput | boolean
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DistractionEventCreateManyInput = {
    id?: string
    sessionId: string
    levelReached: number
    isResolved: boolean
    timestamp?: Date | string
  }

  export type DistractionEventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    levelReached?: IntFieldUpdateOperationsInput | number
    isResolved?: BoolFieldUpdateOperationsInput | boolean
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DistractionEventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    levelReached?: IntFieldUpdateOperationsInput | number
    isResolved?: BoolFieldUpdateOperationsInput | boolean
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type ConfigurationNullableScalarRelationFilter = {
    is?: ConfigurationWhereInput | null
    isNot?: ConfigurationWhereInput | null
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    photoId?: SortOrder
    currentStreak?: SortOrder
    highestStreak?: SortOrder
    lastSessionDate?: SortOrder
    gracePeriodUsed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    currentStreak?: SortOrder
    highestStreak?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    photoId?: SortOrder
    currentStreak?: SortOrder
    highestStreak?: SortOrder
    lastSessionDate?: SortOrder
    gracePeriodUsed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    photoId?: SortOrder
    currentStreak?: SortOrder
    highestStreak?: SortOrder
    lastSessionDate?: SortOrder
    gracePeriodUsed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    currentStreak?: SortOrder
    highestStreak?: SortOrder
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

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type BlockedAppListRelationFilter = {
    every?: BlockedAppWhereInput
    some?: BlockedAppWhereInput
    none?: BlockedAppWhereInput
  }

  export type BlockedAppOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ConfigurationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    targetDuration?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConfigurationAvgOrderByAggregateInput = {
    targetDuration?: SortOrder
  }

  export type ConfigurationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    targetDuration?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConfigurationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    targetDuration?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConfigurationSumOrderByAggregateInput = {
    targetDuration?: SortOrder
  }

  export type ConfigurationScalarRelationFilter = {
    is?: ConfigurationWhereInput
    isNot?: ConfigurationWhereInput
  }

  export type BlockedAppCountOrderByAggregateInput = {
    id?: SortOrder
    configurationId?: SortOrder
    name?: SortOrder
    packageName?: SortOrder
    createdAt?: SortOrder
  }

  export type BlockedAppMaxOrderByAggregateInput = {
    id?: SortOrder
    configurationId?: SortOrder
    name?: SortOrder
    packageName?: SortOrder
    createdAt?: SortOrder
  }

  export type BlockedAppMinOrderByAggregateInput = {
    id?: SortOrder
    configurationId?: SortOrder
    name?: SortOrder
    packageName?: SortOrder
    createdAt?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EnumSessionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SessionStatus | EnumSessionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSessionStatusFilter<$PrismaModel> | $Enums.SessionStatus
  }

  export type DistractionEventListRelationFilter = {
    every?: DistractionEventWhereInput
    some?: DistractionEventWhereInput
    none?: DistractionEventWhereInput
  }

  export type DistractionEventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    targetDuration?: SortOrder
    targetBreakDuration?: SortOrder
    actualDuration?: SortOrder
    status?: SortOrder
    isRecovery?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SessionAvgOrderByAggregateInput = {
    targetDuration?: SortOrder
    targetBreakDuration?: SortOrder
    actualDuration?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    targetDuration?: SortOrder
    targetBreakDuration?: SortOrder
    actualDuration?: SortOrder
    status?: SortOrder
    isRecovery?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    targetDuration?: SortOrder
    targetBreakDuration?: SortOrder
    actualDuration?: SortOrder
    status?: SortOrder
    isRecovery?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SessionSumOrderByAggregateInput = {
    targetDuration?: SortOrder
    targetBreakDuration?: SortOrder
    actualDuration?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumSessionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SessionStatus | EnumSessionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSessionStatusWithAggregatesFilter<$PrismaModel> | $Enums.SessionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSessionStatusFilter<$PrismaModel>
    _max?: NestedEnumSessionStatusFilter<$PrismaModel>
  }

  export type SessionScalarRelationFilter = {
    is?: SessionWhereInput
    isNot?: SessionWhereInput
  }

  export type DistractionEventCountOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    levelReached?: SortOrder
    isResolved?: SortOrder
    timestamp?: SortOrder
  }

  export type DistractionEventAvgOrderByAggregateInput = {
    levelReached?: SortOrder
  }

  export type DistractionEventMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    levelReached?: SortOrder
    isResolved?: SortOrder
    timestamp?: SortOrder
  }

  export type DistractionEventMinOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    levelReached?: SortOrder
    isResolved?: SortOrder
    timestamp?: SortOrder
  }

  export type DistractionEventSumOrderByAggregateInput = {
    levelReached?: SortOrder
  }

  export type ConfigurationCreateNestedOneWithoutUserInput = {
    create?: XOR<ConfigurationCreateWithoutUserInput, ConfigurationUncheckedCreateWithoutUserInput>
    connectOrCreate?: ConfigurationCreateOrConnectWithoutUserInput
    connect?: ConfigurationWhereUniqueInput
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type ConfigurationUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<ConfigurationCreateWithoutUserInput, ConfigurationUncheckedCreateWithoutUserInput>
    connectOrCreate?: ConfigurationCreateOrConnectWithoutUserInput
    connect?: ConfigurationWhereUniqueInput
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ConfigurationUpdateOneWithoutUserNestedInput = {
    create?: XOR<ConfigurationCreateWithoutUserInput, ConfigurationUncheckedCreateWithoutUserInput>
    connectOrCreate?: ConfigurationCreateOrConnectWithoutUserInput
    upsert?: ConfigurationUpsertWithoutUserInput
    disconnect?: ConfigurationWhereInput | boolean
    delete?: ConfigurationWhereInput | boolean
    connect?: ConfigurationWhereUniqueInput
    update?: XOR<XOR<ConfigurationUpdateToOneWithWhereWithoutUserInput, ConfigurationUpdateWithoutUserInput>, ConfigurationUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type ConfigurationUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<ConfigurationCreateWithoutUserInput, ConfigurationUncheckedCreateWithoutUserInput>
    connectOrCreate?: ConfigurationCreateOrConnectWithoutUserInput
    upsert?: ConfigurationUpsertWithoutUserInput
    disconnect?: ConfigurationWhereInput | boolean
    delete?: ConfigurationWhereInput | boolean
    connect?: ConfigurationWhereUniqueInput
    update?: XOR<XOR<ConfigurationUpdateToOneWithWhereWithoutUserInput, ConfigurationUpdateWithoutUserInput>, ConfigurationUncheckedUpdateWithoutUserInput>
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutConfigurationInput = {
    create?: XOR<UserCreateWithoutConfigurationInput, UserUncheckedCreateWithoutConfigurationInput>
    connectOrCreate?: UserCreateOrConnectWithoutConfigurationInput
    connect?: UserWhereUniqueInput
  }

  export type BlockedAppCreateNestedManyWithoutConfigurationInput = {
    create?: XOR<BlockedAppCreateWithoutConfigurationInput, BlockedAppUncheckedCreateWithoutConfigurationInput> | BlockedAppCreateWithoutConfigurationInput[] | BlockedAppUncheckedCreateWithoutConfigurationInput[]
    connectOrCreate?: BlockedAppCreateOrConnectWithoutConfigurationInput | BlockedAppCreateOrConnectWithoutConfigurationInput[]
    createMany?: BlockedAppCreateManyConfigurationInputEnvelope
    connect?: BlockedAppWhereUniqueInput | BlockedAppWhereUniqueInput[]
  }

  export type BlockedAppUncheckedCreateNestedManyWithoutConfigurationInput = {
    create?: XOR<BlockedAppCreateWithoutConfigurationInput, BlockedAppUncheckedCreateWithoutConfigurationInput> | BlockedAppCreateWithoutConfigurationInput[] | BlockedAppUncheckedCreateWithoutConfigurationInput[]
    connectOrCreate?: BlockedAppCreateOrConnectWithoutConfigurationInput | BlockedAppCreateOrConnectWithoutConfigurationInput[]
    createMany?: BlockedAppCreateManyConfigurationInputEnvelope
    connect?: BlockedAppWhereUniqueInput | BlockedAppWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutConfigurationNestedInput = {
    create?: XOR<UserCreateWithoutConfigurationInput, UserUncheckedCreateWithoutConfigurationInput>
    connectOrCreate?: UserCreateOrConnectWithoutConfigurationInput
    upsert?: UserUpsertWithoutConfigurationInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutConfigurationInput, UserUpdateWithoutConfigurationInput>, UserUncheckedUpdateWithoutConfigurationInput>
  }

  export type BlockedAppUpdateManyWithoutConfigurationNestedInput = {
    create?: XOR<BlockedAppCreateWithoutConfigurationInput, BlockedAppUncheckedCreateWithoutConfigurationInput> | BlockedAppCreateWithoutConfigurationInput[] | BlockedAppUncheckedCreateWithoutConfigurationInput[]
    connectOrCreate?: BlockedAppCreateOrConnectWithoutConfigurationInput | BlockedAppCreateOrConnectWithoutConfigurationInput[]
    upsert?: BlockedAppUpsertWithWhereUniqueWithoutConfigurationInput | BlockedAppUpsertWithWhereUniqueWithoutConfigurationInput[]
    createMany?: BlockedAppCreateManyConfigurationInputEnvelope
    set?: BlockedAppWhereUniqueInput | BlockedAppWhereUniqueInput[]
    disconnect?: BlockedAppWhereUniqueInput | BlockedAppWhereUniqueInput[]
    delete?: BlockedAppWhereUniqueInput | BlockedAppWhereUniqueInput[]
    connect?: BlockedAppWhereUniqueInput | BlockedAppWhereUniqueInput[]
    update?: BlockedAppUpdateWithWhereUniqueWithoutConfigurationInput | BlockedAppUpdateWithWhereUniqueWithoutConfigurationInput[]
    updateMany?: BlockedAppUpdateManyWithWhereWithoutConfigurationInput | BlockedAppUpdateManyWithWhereWithoutConfigurationInput[]
    deleteMany?: BlockedAppScalarWhereInput | BlockedAppScalarWhereInput[]
  }

  export type BlockedAppUncheckedUpdateManyWithoutConfigurationNestedInput = {
    create?: XOR<BlockedAppCreateWithoutConfigurationInput, BlockedAppUncheckedCreateWithoutConfigurationInput> | BlockedAppCreateWithoutConfigurationInput[] | BlockedAppUncheckedCreateWithoutConfigurationInput[]
    connectOrCreate?: BlockedAppCreateOrConnectWithoutConfigurationInput | BlockedAppCreateOrConnectWithoutConfigurationInput[]
    upsert?: BlockedAppUpsertWithWhereUniqueWithoutConfigurationInput | BlockedAppUpsertWithWhereUniqueWithoutConfigurationInput[]
    createMany?: BlockedAppCreateManyConfigurationInputEnvelope
    set?: BlockedAppWhereUniqueInput | BlockedAppWhereUniqueInput[]
    disconnect?: BlockedAppWhereUniqueInput | BlockedAppWhereUniqueInput[]
    delete?: BlockedAppWhereUniqueInput | BlockedAppWhereUniqueInput[]
    connect?: BlockedAppWhereUniqueInput | BlockedAppWhereUniqueInput[]
    update?: BlockedAppUpdateWithWhereUniqueWithoutConfigurationInput | BlockedAppUpdateWithWhereUniqueWithoutConfigurationInput[]
    updateMany?: BlockedAppUpdateManyWithWhereWithoutConfigurationInput | BlockedAppUpdateManyWithWhereWithoutConfigurationInput[]
    deleteMany?: BlockedAppScalarWhereInput | BlockedAppScalarWhereInput[]
  }

  export type ConfigurationCreateNestedOneWithoutBlockedAppsInput = {
    create?: XOR<ConfigurationCreateWithoutBlockedAppsInput, ConfigurationUncheckedCreateWithoutBlockedAppsInput>
    connectOrCreate?: ConfigurationCreateOrConnectWithoutBlockedAppsInput
    connect?: ConfigurationWhereUniqueInput
  }

  export type ConfigurationUpdateOneRequiredWithoutBlockedAppsNestedInput = {
    create?: XOR<ConfigurationCreateWithoutBlockedAppsInput, ConfigurationUncheckedCreateWithoutBlockedAppsInput>
    connectOrCreate?: ConfigurationCreateOrConnectWithoutBlockedAppsInput
    upsert?: ConfigurationUpsertWithoutBlockedAppsInput
    connect?: ConfigurationWhereUniqueInput
    update?: XOR<XOR<ConfigurationUpdateToOneWithWhereWithoutBlockedAppsInput, ConfigurationUpdateWithoutBlockedAppsInput>, ConfigurationUncheckedUpdateWithoutBlockedAppsInput>
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type DistractionEventCreateNestedManyWithoutSessionInput = {
    create?: XOR<DistractionEventCreateWithoutSessionInput, DistractionEventUncheckedCreateWithoutSessionInput> | DistractionEventCreateWithoutSessionInput[] | DistractionEventUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: DistractionEventCreateOrConnectWithoutSessionInput | DistractionEventCreateOrConnectWithoutSessionInput[]
    createMany?: DistractionEventCreateManySessionInputEnvelope
    connect?: DistractionEventWhereUniqueInput | DistractionEventWhereUniqueInput[]
  }

  export type DistractionEventUncheckedCreateNestedManyWithoutSessionInput = {
    create?: XOR<DistractionEventCreateWithoutSessionInput, DistractionEventUncheckedCreateWithoutSessionInput> | DistractionEventCreateWithoutSessionInput[] | DistractionEventUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: DistractionEventCreateOrConnectWithoutSessionInput | DistractionEventCreateOrConnectWithoutSessionInput[]
    createMany?: DistractionEventCreateManySessionInputEnvelope
    connect?: DistractionEventWhereUniqueInput | DistractionEventWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumSessionStatusFieldUpdateOperationsInput = {
    set?: $Enums.SessionStatus
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type DistractionEventUpdateManyWithoutSessionNestedInput = {
    create?: XOR<DistractionEventCreateWithoutSessionInput, DistractionEventUncheckedCreateWithoutSessionInput> | DistractionEventCreateWithoutSessionInput[] | DistractionEventUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: DistractionEventCreateOrConnectWithoutSessionInput | DistractionEventCreateOrConnectWithoutSessionInput[]
    upsert?: DistractionEventUpsertWithWhereUniqueWithoutSessionInput | DistractionEventUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: DistractionEventCreateManySessionInputEnvelope
    set?: DistractionEventWhereUniqueInput | DistractionEventWhereUniqueInput[]
    disconnect?: DistractionEventWhereUniqueInput | DistractionEventWhereUniqueInput[]
    delete?: DistractionEventWhereUniqueInput | DistractionEventWhereUniqueInput[]
    connect?: DistractionEventWhereUniqueInput | DistractionEventWhereUniqueInput[]
    update?: DistractionEventUpdateWithWhereUniqueWithoutSessionInput | DistractionEventUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: DistractionEventUpdateManyWithWhereWithoutSessionInput | DistractionEventUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: DistractionEventScalarWhereInput | DistractionEventScalarWhereInput[]
  }

  export type DistractionEventUncheckedUpdateManyWithoutSessionNestedInput = {
    create?: XOR<DistractionEventCreateWithoutSessionInput, DistractionEventUncheckedCreateWithoutSessionInput> | DistractionEventCreateWithoutSessionInput[] | DistractionEventUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: DistractionEventCreateOrConnectWithoutSessionInput | DistractionEventCreateOrConnectWithoutSessionInput[]
    upsert?: DistractionEventUpsertWithWhereUniqueWithoutSessionInput | DistractionEventUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: DistractionEventCreateManySessionInputEnvelope
    set?: DistractionEventWhereUniqueInput | DistractionEventWhereUniqueInput[]
    disconnect?: DistractionEventWhereUniqueInput | DistractionEventWhereUniqueInput[]
    delete?: DistractionEventWhereUniqueInput | DistractionEventWhereUniqueInput[]
    connect?: DistractionEventWhereUniqueInput | DistractionEventWhereUniqueInput[]
    update?: DistractionEventUpdateWithWhereUniqueWithoutSessionInput | DistractionEventUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: DistractionEventUpdateManyWithWhereWithoutSessionInput | DistractionEventUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: DistractionEventScalarWhereInput | DistractionEventScalarWhereInput[]
  }

  export type SessionCreateNestedOneWithoutDistractionsInput = {
    create?: XOR<SessionCreateWithoutDistractionsInput, SessionUncheckedCreateWithoutDistractionsInput>
    connectOrCreate?: SessionCreateOrConnectWithoutDistractionsInput
    connect?: SessionWhereUniqueInput
  }

  export type SessionUpdateOneRequiredWithoutDistractionsNestedInput = {
    create?: XOR<SessionCreateWithoutDistractionsInput, SessionUncheckedCreateWithoutDistractionsInput>
    connectOrCreate?: SessionCreateOrConnectWithoutDistractionsInput
    upsert?: SessionUpsertWithoutDistractionsInput
    connect?: SessionWhereUniqueInput
    update?: XOR<XOR<SessionUpdateToOneWithWhereWithoutDistractionsInput, SessionUpdateWithoutDistractionsInput>, SessionUncheckedUpdateWithoutDistractionsInput>
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedEnumSessionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SessionStatus | EnumSessionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSessionStatusFilter<$PrismaModel> | $Enums.SessionStatus
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumSessionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SessionStatus | EnumSessionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSessionStatusWithAggregatesFilter<$PrismaModel> | $Enums.SessionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSessionStatusFilter<$PrismaModel>
    _max?: NestedEnumSessionStatusFilter<$PrismaModel>
  }

  export type ConfigurationCreateWithoutUserInput = {
    id?: string
    targetDuration?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    blockedApps?: BlockedAppCreateNestedManyWithoutConfigurationInput
  }

  export type ConfigurationUncheckedCreateWithoutUserInput = {
    id?: string
    targetDuration?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    blockedApps?: BlockedAppUncheckedCreateNestedManyWithoutConfigurationInput
  }

  export type ConfigurationCreateOrConnectWithoutUserInput = {
    where: ConfigurationWhereUniqueInput
    create: XOR<ConfigurationCreateWithoutUserInput, ConfigurationUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    startTime?: Date | string
    endTime?: Date | string | null
    targetDuration: number
    targetBreakDuration?: number | null
    actualDuration?: number | null
    status?: $Enums.SessionStatus
    isRecovery?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    distractions?: DistractionEventCreateNestedManyWithoutSessionInput
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    startTime?: Date | string
    endTime?: Date | string | null
    targetDuration: number
    targetBreakDuration?: number | null
    actualDuration?: number | null
    status?: $Enums.SessionStatus
    isRecovery?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    distractions?: DistractionEventUncheckedCreateNestedManyWithoutSessionInput
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ConfigurationUpsertWithoutUserInput = {
    update: XOR<ConfigurationUpdateWithoutUserInput, ConfigurationUncheckedUpdateWithoutUserInput>
    create: XOR<ConfigurationCreateWithoutUserInput, ConfigurationUncheckedCreateWithoutUserInput>
    where?: ConfigurationWhereInput
  }

  export type ConfigurationUpdateToOneWithWhereWithoutUserInput = {
    where?: ConfigurationWhereInput
    data: XOR<ConfigurationUpdateWithoutUserInput, ConfigurationUncheckedUpdateWithoutUserInput>
  }

  export type ConfigurationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    targetDuration?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blockedApps?: BlockedAppUpdateManyWithoutConfigurationNestedInput
  }

  export type ConfigurationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    targetDuration?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blockedApps?: BlockedAppUncheckedUpdateManyWithoutConfigurationNestedInput
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    startTime?: DateTimeFilter<"Session"> | Date | string
    endTime?: DateTimeNullableFilter<"Session"> | Date | string | null
    targetDuration?: IntFilter<"Session"> | number
    targetBreakDuration?: IntNullableFilter<"Session"> | number | null
    actualDuration?: IntNullableFilter<"Session"> | number | null
    status?: EnumSessionStatusFilter<"Session"> | $Enums.SessionStatus
    isRecovery?: BoolFilter<"Session"> | boolean
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
  }

  export type UserCreateWithoutConfigurationInput = {
    id?: string
    email: string
    password: string
    name: string
    photoId?: string | null
    currentStreak?: number
    highestStreak?: number
    lastSessionDate?: Date | string | null
    gracePeriodUsed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutConfigurationInput = {
    id?: string
    email: string
    password: string
    name: string
    photoId?: string | null
    currentStreak?: number
    highestStreak?: number
    lastSessionDate?: Date | string | null
    gracePeriodUsed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutConfigurationInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutConfigurationInput, UserUncheckedCreateWithoutConfigurationInput>
  }

  export type BlockedAppCreateWithoutConfigurationInput = {
    id?: string
    name: string
    packageName?: string | null
    createdAt?: Date | string
  }

  export type BlockedAppUncheckedCreateWithoutConfigurationInput = {
    id?: string
    name: string
    packageName?: string | null
    createdAt?: Date | string
  }

  export type BlockedAppCreateOrConnectWithoutConfigurationInput = {
    where: BlockedAppWhereUniqueInput
    create: XOR<BlockedAppCreateWithoutConfigurationInput, BlockedAppUncheckedCreateWithoutConfigurationInput>
  }

  export type BlockedAppCreateManyConfigurationInputEnvelope = {
    data: BlockedAppCreateManyConfigurationInput | BlockedAppCreateManyConfigurationInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutConfigurationInput = {
    update: XOR<UserUpdateWithoutConfigurationInput, UserUncheckedUpdateWithoutConfigurationInput>
    create: XOR<UserCreateWithoutConfigurationInput, UserUncheckedCreateWithoutConfigurationInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutConfigurationInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutConfigurationInput, UserUncheckedUpdateWithoutConfigurationInput>
  }

  export type UserUpdateWithoutConfigurationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    photoId?: NullableStringFieldUpdateOperationsInput | string | null
    currentStreak?: IntFieldUpdateOperationsInput | number
    highestStreak?: IntFieldUpdateOperationsInput | number
    lastSessionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gracePeriodUsed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutConfigurationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    photoId?: NullableStringFieldUpdateOperationsInput | string | null
    currentStreak?: IntFieldUpdateOperationsInput | number
    highestStreak?: IntFieldUpdateOperationsInput | number
    lastSessionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gracePeriodUsed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type BlockedAppUpsertWithWhereUniqueWithoutConfigurationInput = {
    where: BlockedAppWhereUniqueInput
    update: XOR<BlockedAppUpdateWithoutConfigurationInput, BlockedAppUncheckedUpdateWithoutConfigurationInput>
    create: XOR<BlockedAppCreateWithoutConfigurationInput, BlockedAppUncheckedCreateWithoutConfigurationInput>
  }

  export type BlockedAppUpdateWithWhereUniqueWithoutConfigurationInput = {
    where: BlockedAppWhereUniqueInput
    data: XOR<BlockedAppUpdateWithoutConfigurationInput, BlockedAppUncheckedUpdateWithoutConfigurationInput>
  }

  export type BlockedAppUpdateManyWithWhereWithoutConfigurationInput = {
    where: BlockedAppScalarWhereInput
    data: XOR<BlockedAppUpdateManyMutationInput, BlockedAppUncheckedUpdateManyWithoutConfigurationInput>
  }

  export type BlockedAppScalarWhereInput = {
    AND?: BlockedAppScalarWhereInput | BlockedAppScalarWhereInput[]
    OR?: BlockedAppScalarWhereInput[]
    NOT?: BlockedAppScalarWhereInput | BlockedAppScalarWhereInput[]
    id?: StringFilter<"BlockedApp"> | string
    configurationId?: StringFilter<"BlockedApp"> | string
    name?: StringFilter<"BlockedApp"> | string
    packageName?: StringNullableFilter<"BlockedApp"> | string | null
    createdAt?: DateTimeFilter<"BlockedApp"> | Date | string
  }

  export type ConfigurationCreateWithoutBlockedAppsInput = {
    id?: string
    targetDuration?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutConfigurationInput
  }

  export type ConfigurationUncheckedCreateWithoutBlockedAppsInput = {
    id?: string
    userId: string
    targetDuration?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConfigurationCreateOrConnectWithoutBlockedAppsInput = {
    where: ConfigurationWhereUniqueInput
    create: XOR<ConfigurationCreateWithoutBlockedAppsInput, ConfigurationUncheckedCreateWithoutBlockedAppsInput>
  }

  export type ConfigurationUpsertWithoutBlockedAppsInput = {
    update: XOR<ConfigurationUpdateWithoutBlockedAppsInput, ConfigurationUncheckedUpdateWithoutBlockedAppsInput>
    create: XOR<ConfigurationCreateWithoutBlockedAppsInput, ConfigurationUncheckedCreateWithoutBlockedAppsInput>
    where?: ConfigurationWhereInput
  }

  export type ConfigurationUpdateToOneWithWhereWithoutBlockedAppsInput = {
    where?: ConfigurationWhereInput
    data: XOR<ConfigurationUpdateWithoutBlockedAppsInput, ConfigurationUncheckedUpdateWithoutBlockedAppsInput>
  }

  export type ConfigurationUpdateWithoutBlockedAppsInput = {
    id?: StringFieldUpdateOperationsInput | string
    targetDuration?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutConfigurationNestedInput
  }

  export type ConfigurationUncheckedUpdateWithoutBlockedAppsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    targetDuration?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    email: string
    password: string
    name: string
    photoId?: string | null
    currentStreak?: number
    highestStreak?: number
    lastSessionDate?: Date | string | null
    gracePeriodUsed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    configuration?: ConfigurationCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    email: string
    password: string
    name: string
    photoId?: string | null
    currentStreak?: number
    highestStreak?: number
    lastSessionDate?: Date | string | null
    gracePeriodUsed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    configuration?: ConfigurationUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type DistractionEventCreateWithoutSessionInput = {
    id?: string
    levelReached: number
    isResolved: boolean
    timestamp?: Date | string
  }

  export type DistractionEventUncheckedCreateWithoutSessionInput = {
    id?: string
    levelReached: number
    isResolved: boolean
    timestamp?: Date | string
  }

  export type DistractionEventCreateOrConnectWithoutSessionInput = {
    where: DistractionEventWhereUniqueInput
    create: XOR<DistractionEventCreateWithoutSessionInput, DistractionEventUncheckedCreateWithoutSessionInput>
  }

  export type DistractionEventCreateManySessionInputEnvelope = {
    data: DistractionEventCreateManySessionInput | DistractionEventCreateManySessionInput[]
    skipDuplicates?: boolean
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
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    photoId?: NullableStringFieldUpdateOperationsInput | string | null
    currentStreak?: IntFieldUpdateOperationsInput | number
    highestStreak?: IntFieldUpdateOperationsInput | number
    lastSessionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gracePeriodUsed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    configuration?: ConfigurationUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    photoId?: NullableStringFieldUpdateOperationsInput | string | null
    currentStreak?: IntFieldUpdateOperationsInput | number
    highestStreak?: IntFieldUpdateOperationsInput | number
    lastSessionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gracePeriodUsed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    configuration?: ConfigurationUncheckedUpdateOneWithoutUserNestedInput
  }

  export type DistractionEventUpsertWithWhereUniqueWithoutSessionInput = {
    where: DistractionEventWhereUniqueInput
    update: XOR<DistractionEventUpdateWithoutSessionInput, DistractionEventUncheckedUpdateWithoutSessionInput>
    create: XOR<DistractionEventCreateWithoutSessionInput, DistractionEventUncheckedCreateWithoutSessionInput>
  }

  export type DistractionEventUpdateWithWhereUniqueWithoutSessionInput = {
    where: DistractionEventWhereUniqueInput
    data: XOR<DistractionEventUpdateWithoutSessionInput, DistractionEventUncheckedUpdateWithoutSessionInput>
  }

  export type DistractionEventUpdateManyWithWhereWithoutSessionInput = {
    where: DistractionEventScalarWhereInput
    data: XOR<DistractionEventUpdateManyMutationInput, DistractionEventUncheckedUpdateManyWithoutSessionInput>
  }

  export type DistractionEventScalarWhereInput = {
    AND?: DistractionEventScalarWhereInput | DistractionEventScalarWhereInput[]
    OR?: DistractionEventScalarWhereInput[]
    NOT?: DistractionEventScalarWhereInput | DistractionEventScalarWhereInput[]
    id?: StringFilter<"DistractionEvent"> | string
    sessionId?: StringFilter<"DistractionEvent"> | string
    levelReached?: IntFilter<"DistractionEvent"> | number
    isResolved?: BoolFilter<"DistractionEvent"> | boolean
    timestamp?: DateTimeFilter<"DistractionEvent"> | Date | string
  }

  export type SessionCreateWithoutDistractionsInput = {
    id?: string
    startTime?: Date | string
    endTime?: Date | string | null
    targetDuration: number
    targetBreakDuration?: number | null
    actualDuration?: number | null
    status?: $Enums.SessionStatus
    isRecovery?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateWithoutDistractionsInput = {
    id?: string
    userId: string
    startTime?: Date | string
    endTime?: Date | string | null
    targetDuration: number
    targetBreakDuration?: number | null
    actualDuration?: number | null
    status?: $Enums.SessionStatus
    isRecovery?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionCreateOrConnectWithoutDistractionsInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutDistractionsInput, SessionUncheckedCreateWithoutDistractionsInput>
  }

  export type SessionUpsertWithoutDistractionsInput = {
    update: XOR<SessionUpdateWithoutDistractionsInput, SessionUncheckedUpdateWithoutDistractionsInput>
    create: XOR<SessionCreateWithoutDistractionsInput, SessionUncheckedCreateWithoutDistractionsInput>
    where?: SessionWhereInput
  }

  export type SessionUpdateToOneWithWhereWithoutDistractionsInput = {
    where?: SessionWhereInput
    data: XOR<SessionUpdateWithoutDistractionsInput, SessionUncheckedUpdateWithoutDistractionsInput>
  }

  export type SessionUpdateWithoutDistractionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    targetDuration?: IntFieldUpdateOperationsInput | number
    targetBreakDuration?: NullableIntFieldUpdateOperationsInput | number | null
    actualDuration?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    isRecovery?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateWithoutDistractionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    targetDuration?: IntFieldUpdateOperationsInput | number
    targetBreakDuration?: NullableIntFieldUpdateOperationsInput | number | null
    actualDuration?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    isRecovery?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyUserInput = {
    id?: string
    startTime?: Date | string
    endTime?: Date | string | null
    targetDuration: number
    targetBreakDuration?: number | null
    actualDuration?: number | null
    status?: $Enums.SessionStatus
    isRecovery?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    targetDuration?: IntFieldUpdateOperationsInput | number
    targetBreakDuration?: NullableIntFieldUpdateOperationsInput | number | null
    actualDuration?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    isRecovery?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    distractions?: DistractionEventUpdateManyWithoutSessionNestedInput
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    targetDuration?: IntFieldUpdateOperationsInput | number
    targetBreakDuration?: NullableIntFieldUpdateOperationsInput | number | null
    actualDuration?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    isRecovery?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    distractions?: DistractionEventUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    targetDuration?: IntFieldUpdateOperationsInput | number
    targetBreakDuration?: NullableIntFieldUpdateOperationsInput | number | null
    actualDuration?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    isRecovery?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlockedAppCreateManyConfigurationInput = {
    id?: string
    name: string
    packageName?: string | null
    createdAt?: Date | string
  }

  export type BlockedAppUpdateWithoutConfigurationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    packageName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlockedAppUncheckedUpdateWithoutConfigurationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    packageName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlockedAppUncheckedUpdateManyWithoutConfigurationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    packageName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DistractionEventCreateManySessionInput = {
    id?: string
    levelReached: number
    isResolved: boolean
    timestamp?: Date | string
  }

  export type DistractionEventUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    levelReached?: IntFieldUpdateOperationsInput | number
    isResolved?: BoolFieldUpdateOperationsInput | boolean
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DistractionEventUncheckedUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    levelReached?: IntFieldUpdateOperationsInput | number
    isResolved?: BoolFieldUpdateOperationsInput | boolean
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DistractionEventUncheckedUpdateManyWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    levelReached?: IntFieldUpdateOperationsInput | number
    isResolved?: BoolFieldUpdateOperationsInput | boolean
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
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