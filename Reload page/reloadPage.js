function reloadPage(nReload, time) {
    for (let i = 0; i < nReload; i++) {
        setTimeout(() => location.reload(), time)
    }
}

reloadPage(10, 5000)