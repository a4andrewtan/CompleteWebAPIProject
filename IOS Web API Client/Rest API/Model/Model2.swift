//
//  Model.swift
//  Rest API
//
//  Created by Niso on 4/29/20.
//  Copyright © 2020 Niso. All rights reserved.
//

import Foundation

struct QuotesData: Decodable {
    let quotes: [Quotes]
    
    private enum CodingKeys: String, CodingKey {
        case quotes = "results"
    }
}

struct Quotes: Decodable {
    
    let author: String?
    let quotation: String?
    
    private enum CodingKeys: String, CodingKey {
        case author, quotation

    }
}
