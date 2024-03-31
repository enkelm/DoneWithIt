type Enumerate<N extends number, Acc extends number[] = []> = Acc["length"] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc["length"]]>

export type IntRange<F extends number, T extends number> = Exclude<Enumerate<T>, Enumerate<F>>

export type ObjStringValues<T extends Record<string, string>> = {
  [K in keyof T]: T[K] extends string ? T[K] : never
}[keyof T]
