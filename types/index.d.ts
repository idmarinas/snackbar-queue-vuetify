import Vue, { VueConstructor } from 'vue'

export interface SnackbarQueueItem
{
  id: string | number,
  message: string,
  props?: Record<string, any>
}

export class App extends Vue
{
    items: SnackbarQueueItem[];
    colors: string[];
    addSnackbar(): void;
    removeItem(arg0: string | number): void;
    random(min: number, max: number): number;
}

export class Decorate extends Vue
{
  data: {
    pen: {[key: string]: unknown};
    selected: string;
  }

  sections (): string;

  importTemplate (): void;
  analyze (res: string): void
  parseTemplate (target: string, template: string): string
}

declare module 'snackbar-queue-vuetify'
{
  const install: (Vue: VueConstructor, args: {}) => void
  const App: App
  const Decorate: Decorate
  const IdmSnackbar: VueConstructor
  const IdmSnackbarQueue: VueConstructor

  export {
    install,
    App,
    Decorate,
    IdmSnackbar,
    IdmSnackbarQueue
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    options: Record<string, any>;
  }
  interface VueConstructor {
    options: Record<string, any>;
  }
}
