//
//  ViewController.swift
//  Rest API
//
//  Created by Niso on 4/29/20.
//  Copyright © 2020 Niso. All rights reserved.
//

import UIKit

class MovieViewController: UIViewController {
    
    @IBOutlet weak var tableView: UITableView!
       @IBOutlet weak var addAQuote: UIButton!
    private var viewModel = MovieViewModel(flag: true)

    @IBAction func addQuote(_ sender: UIButton) {
        
        print("ok")
    }
    @IBAction func getRandom(_ sender: UIButton) {
          loadPopularMoviesData(flag:false)
    }
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view.
        loadPopularMoviesData(flag:false)
        
    }
    
    @IBAction func getAll(_ sender: UIButton) {
        
        loadPopularMoviesData(flag:true)
    }
    private func loadPopularMoviesData(flag:Bool) {
       
        viewModel.flag = flag
        
        viewModel.fetchPopularMoviesData { [weak self] in
            self?.tableView.dataSource = self
            self?.tableView.reloadData()
        }
    }
}

// MARK: - TableView
extension MovieViewController: UITableViewDataSource {
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return viewModel.numberOfRowsInSection(section: section)
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: "cell", for: indexPath) as! MovieTableViewCell
        
        let movie = viewModel.cellForRowAt(indexPath: indexPath)
        cell.setCellWithValuesOf(movie)
        
        return cell
    }
}
