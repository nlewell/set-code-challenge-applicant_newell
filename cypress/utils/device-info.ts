import OsVersion from './os-version'
import User from './user'

export default class DeviceInfo {
  name: string
  os: string
  publicIpAddress: string
  osSpRelease: string
  osVersion: OsVersion
  manufacturer: string
  model: string
  serialNumber: string
  memory: string
  uptime: string
  timezone: string
  lastLoggedInUser: User
}
