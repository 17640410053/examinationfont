import {selectById, usersLogin, usersRegister, saveSession, getSession} from '@/api/users'
import {Message} from 'element-ui'

const users = {
  actions: {
    SelectById ({commit}, value) {
      return new Promise((resolve, reject) => {
        selectById(value).then(response => {
          resolve(response)
        }).catch(err => {
          reject(err)
        })
      })
    },
    UsersLogin ({commit}, value) {
      return new Promise((resolve, reject) => {
        usersLogin(value).then(response => {
          if (response.code !== 0) {
            Message.warning(response.msg)
          } else {
            resolve(response)
          }
        }).catch(err => {
          reject(err)
        })
      })
    },
    SaveSession ({commit}, value) {
      return new Promise((resolve, reject) => {
        saveSession(value).then(response => {
          if (response.code !== 0) {
            Message.warning(response.msg)
          } else {
            resolve(response)
          }
        }).catch(err => {
          reject(err)
        })
      })
    },
    GetSession ({commit}, value) {
      return new Promise((resolve, reject) => {
        getSession(value).then(response => {
          if (response.code !== 0) {
            Message.warning(response.msg)
          } else {
            resolve(response)
          }
        }).catch(err => {
          reject(err)
        })
      })
    },
    UsersRegister ({commit}, value) {
      return new Promise((resolve, reject) => {
        usersRegister(value).then(response => {
          if (response.code !== 0) {
            Message.warning(response.msg)
          } else {
            resolve(response)
          }
        }).catch(err => {
          reject(err)
        })
      })
    }
  }
}
export default users
