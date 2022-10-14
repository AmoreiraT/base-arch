export interface ProcessosAtivosModel {
  columns: string[];
  types: number[];
  maxRecordsReached: boolean;
  onlyDataTable: boolean;
  fields: Field[];
  rowCount: number;
  list: List[];
  returnCode: number;
  hasError: boolean;
}

export interface Field {
  obscureText: boolean;
  read_only: boolean;
  id: string;
  alias: string;
  index: number;
  visible: boolean;
  group: number;
  dataType: number;
  controlHighlightRow: boolean;
  bscColumn: boolean;
  format: number;
  system: boolean;
  local: boolean;
}

export interface List {
  FASE: string;
  PERCENTUAL: number;
}
