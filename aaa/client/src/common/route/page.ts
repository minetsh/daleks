import AuthType from "@/common/auth";

interface PageProps {
  name: string;
  path: string;
  auth?: AuthType;
}

export default class Page {
  private props: PageProps;

  constructor(props: PageProps) {
    this.props = props;
  }

  get name(): string {
    return this.props.name;
  }

  get path(): string {
    return this.props.path;
  }

  get auth(): AuthType {
    return this.props.auth || AuthType.auth;
  }

  static of(props: PageProps): Page {
    return new Page(props);
  }
}
