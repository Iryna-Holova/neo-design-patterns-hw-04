export class DocumentBuilder {
  private header?: string;
  private body?: string;
  private footer?: string;

  public addHeader(text: string): this {
    this.header = text;
    return this;
  }

  public addBody(text: string): this {
    this.body = text;
    return this;
  }

  public addFooter(text: string): this {
    this.footer = text;
    return this;
  }

  public build(): string {
    const parts: string[] = [];

    if (this.header) {
      parts.push(`=== ${this.header} ===`);
      parts.push('');
    }

    if (this.body) {
      parts.push(this.body);
      parts.push('');
    }

    if (this.footer) {
      parts.push(this.footer);
    }

    return parts.join('\n');
  }
}
