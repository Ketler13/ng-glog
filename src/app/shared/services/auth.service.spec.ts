import { TestBed, inject } from '@angular/core/testing';
import { HttpModule, XHRBackend, Response, ResponseOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        {provide: XHRBackend, useClass: MockBackend},
        AuthService
      ]
    });
  });

  it('should return boolean while checking email unique', inject([XHRBackend, AuthService], (mockBackend: MockBackend, service: AuthService) => {
    const email = 'test@test.com';
    mockBackend.connections.subscribe( (connection: MockConnection) => {
      const responseOptions = new ResponseOptions({
        body: JSON.stringify({success: true})
      });
      connection.mockRespond(new Response(responseOptions));
      expect(connection.request.url).toBe('http://127.0.0.1:3000/api/checkEmail');
    });
    expect(service.checkEmailUnique(email)).toBeTruthy();
  }));
});
