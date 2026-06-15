export class AppConfigService {
  private static instance?: AppConfigService;

  public readonly companyName: string;
  public readonly footer: string;

  private constructor(companyName: string, footer: string) {
    this.companyName = companyName;
    this.footer = footer;
  }

  public static getInstance(
    companyName?: string,
    footer?: string,
  ): AppConfigService {
    if (!AppConfigService.instance) {
      AppConfigService.instance = new AppConfigService(
        companyName ?? '',
        footer ?? '',
      );
    }

    return AppConfigService.instance;
  }
}
