export interface Seekbar {
  value: number,
  min: number,
  max: number,
  onInput: any,
  setSeekTime: (params: any) => void,
  appTime: number,
}
