import { Request } from "express";


export type ApiRequest<TBody> = Request extends Request<infer P>
  ? Request<P, any, TBody>
  : never;