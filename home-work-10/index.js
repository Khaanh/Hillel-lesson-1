function structureUserInfo(name) {
  return function(role) {
    return {
      role,
      name,
    }
  }
}

structureUserInfo('Khanh')('Frontend');