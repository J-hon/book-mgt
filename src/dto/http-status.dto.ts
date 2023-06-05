export class GenericStatus<T> {
  statusCode?: number;
  description: string;
  data?: T;

  constructor({
    statusCode,
    description,
    data,
  }: {
    statusCode?: number;
    description: string;
    data?: T;
  }) {
    this.statusCode = statusCode || 200;
    this.description = description;
    this.data = data;
  }
}
