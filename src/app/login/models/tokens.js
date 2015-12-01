import Promise from 'promise'

import ENV from 'utils/env'
import REST from 'utils/rest'

export default class Tokens extends REST {

  __resource = { api: '/tokens', ...ENV.UC_RES }

}
