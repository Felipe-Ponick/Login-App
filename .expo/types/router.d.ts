/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(auth)'}/home` | `/home`; params?: Router.UnknownInputParams; } | { pathname: `${'/(auth)'}/nova-tarefa` | `/nova-tarefa`; params?: Router.UnknownInputParams; } | { pathname: `/lib/supabaseClient`; params?: Router.UnknownInputParams; };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/`; params?: Router.UnknownOutputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(auth)'}/home` | `/home`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(auth)'}/nova-tarefa` | `/nova-tarefa`; params?: Router.UnknownOutputParams; } | { pathname: `/lib/supabaseClient`; params?: Router.UnknownOutputParams; };
      href: Router.RelativePathString | Router.ExternalPathString | `/${`?${string}` | `#${string}` | ''}` | `/_sitemap${`?${string}` | `#${string}` | ''}` | `${'/(auth)'}/home${`?${string}` | `#${string}` | ''}` | `/home${`?${string}` | `#${string}` | ''}` | `${'/(auth)'}/nova-tarefa${`?${string}` | `#${string}` | ''}` | `/nova-tarefa${`?${string}` | `#${string}` | ''}` | `/lib/supabaseClient${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(auth)'}/home` | `/home`; params?: Router.UnknownInputParams; } | { pathname: `${'/(auth)'}/nova-tarefa` | `/nova-tarefa`; params?: Router.UnknownInputParams; } | { pathname: `/lib/supabaseClient`; params?: Router.UnknownInputParams; };
    }
  }
}
