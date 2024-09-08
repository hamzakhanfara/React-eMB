import launcher from "../conf/launcher.json"
interface ILauncherApp {
    /** Application name. */
    application: string;
    /** Application name to display. */
    name: string;
    /** Application subtitle. */
    subtitle: string;
    /** Icon used for the application (Fontawesome). */
    icon: string;
    /** Router link path. */
    routerlink: string;
    /** Index of the application (0 to 15). */
    licenseRequired: string;
  }
  export { launcher as Config, type ILauncherApp };