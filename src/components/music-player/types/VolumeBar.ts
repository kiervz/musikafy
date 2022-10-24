export interface VolumeBar {
  value: number,
  min: number,
  max: number,
  onChange: any,
  setVolume: (params: number) => void,
}
