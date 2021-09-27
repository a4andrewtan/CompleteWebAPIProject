//
//  MovieViewModel.swift
//  Rest API
//
//  Created by Niso on 4/29/20.
//  Copyright © 2020 Niso. All rights reserved.
//

import Foundation

class MovieViewModel {
    
    private var apiService = ApiService2()
    private var popularMovies = [Quotes]()
    var flag:Bool = true
    
    init(flag: Bool) {
           self.flag = flag
         
       }
    func fetchPopularMoviesData(completion: @escaping () -> ()) {
        
        // weak self - prevent retain cycles
        var url = ""
        print(flag)
        if flag{
            url = "https://cdev-quotes.azurewebsites.net/quotes"
        }else{
            url = "https://cdev-quotes.azurewebsites.net/random"
        }
        apiService.getPopularMoviesData (url:url){ [weak self] (result) in
            
            switch result {
            case .success(let listOf):
                
                self?.popularMovies = listOf.quotes
                completion()
            case .failure(let error):
                // Something is wrong with the JSON file or the model
                
                print("Error processing json data: \(error)")
            }
        }
    }
    
    func numberOfRowsInSection(section: Int) -> Int {
        if popularMovies.count != 0 {
            return popularMovies.count
        }
        return 0
    }
    
    func cellForRowAt (indexPath: IndexPath) -> Quotes {
        return popularMovies[indexPath.row]
    }
}
