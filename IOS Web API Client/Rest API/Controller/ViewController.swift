//
//  ViewController.swift
//  Rest API
//
//  Created by Niso on 4/29/20.
//  Copyright © 2020 Niso. All rights reserved.
//

import UIKit

class ViewController: UIViewController {
    
    @IBOutlet weak var quotation: UITextField!
    @IBOutlet weak var author: UITextField!
    @IBAction func doSomething(_ sender: UIButton) {
        
        print("yes")
        sendQuotes { [weak self] (result) in
                   
                  
               }
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view.
       
    }
    
    func sendQuotes(completion: @escaping (Result<QuotesData, Error>) -> Void) {
              
                let popularMoviesURL = "https://cdev-quotes.azurewebsites.net/quotes"
              
           
           let session = URLSession.shared
           let url2 = URL(string: "https://cdev-quotes.azurewebsites.net/quotes")!

           var request = URLRequest(url: url2)
           request.httpMethod = "POST"
           
          request.setValue("application/json", forHTTPHeaderField: "Content-Type")
           
           let json = [
            "author": quotation.text! as String,
               "quotation": author.text! as String
            ]
           
           let jsonData = try! JSONSerialization.data(withJSONObject: json, options: [])
           
           let task = session.uploadTask(with: request, from: jsonData) { data, response, error in
               if let data = data, let dataString = String(data: data, encoding: .utf8) {
                   print(dataString)
               }
           }

           task.resume()
              
            
              
          }
    
   
}



