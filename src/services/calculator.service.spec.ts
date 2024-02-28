import { TestBed } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';
import { LoggerService } from './logger.service';

describe('CalculatorService', () => {

  it('should be check addition', () => {
    const logger = new LoggerService();
    const service  = new CalculatorService(logger);
    expect(service.add(2,2)).toBe(4);
  });

  it('should be checking substract', () => {
    const logger = new LoggerService();
    const service  = new CalculatorService(logger);
    expect(service.subtract(3,2)).toBe(1);
  })
});
