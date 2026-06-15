import { AppConfigService } from "./AppConfigService";

const config1 = AppConfigService.getInstance("Acme Inc.", "Confidential");
const config2 = AppConfigService.getInstance("Another Corp", "Top Secret");

console.log(config1 === config2); // true
console.log(config1.companyName); // Acme Inc.
console.log(config2.companyName); // Acme Inc. (same instance)
