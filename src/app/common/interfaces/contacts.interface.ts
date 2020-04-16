export interface ContactInfo {
  success: boolean;
  data: Data;
  lastRefreshed: string;
  lastOriginUpdate: string;
}

export interface Data {
  contacts: Contacts;
}

export interface Contacts {
  primary: Primary;
  regional: Regional[];
}

export interface Primary {
  number: string;
  'number-tollfree': string;
  email: string;
  twitter: string;
  facebook: string;
  media: string[];
}

export interface Regional {
  loc: string;
  number: string;
}
