export const authLevels = (num) => {
    switch (num) {
        case -1:
            return "Deactivated"
        case 0:
            return "Pending"
        case 1:
            return "User"
        case 2:
            return "Moderator"
        case 3:
            return "Administrator"
        default:
            return "Default"
    }
}