function actualizaCacheDinamico(dynamicCache, req, res) {
    //se va a encargar de guardar en mi cache dinamico
    if(res.ok) {
    //significa que tengo data
       return caches.open(dynamicCache).then(cache => {

         cache.put(req, res.clone() );
        
            return res.clone();
        });
    } else {
        //si no viene respuesta
       
    return res;
    }
}