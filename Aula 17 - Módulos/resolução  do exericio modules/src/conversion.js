const conversion = {
    get AU_IN_KILOMETERS () { return 149587870},

    convertAutoKM(au) {
        return au * this.AU_IN_KILOMETERS;
    }
}

export default conversion