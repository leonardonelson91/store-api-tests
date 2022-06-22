/// <reference types='codeceptjs' />

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any }
  interface Methods extends REST, JSONResponse {}
  interface I extends ReturnType<steps_file>, WithTranslation<JSONResponse> {}
  namespace Translation {
    interface Actions {}
  }
}
